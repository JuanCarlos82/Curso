import {useState, useEffect} from 'react'
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../Firebase/Firebase';
import { ScreenListaTicket } from '../Screens/ScreenListaTicket';
import { ScreenDialogoTicket } from '../Screens/ScreenDialogoTicket';
import { TicketContexto } from '../Hooks/TicketContexto';

export function Ticket(){
    const [lstTicket, setLstTicket] = useState([]);
    const [estadoDialogo, setEstadoDialogo] = useState(false);
    const [accion, setAccion] = useState(null);
    const [ticketSeleccionado, setTicketSeleccionado] = useState(null);

    useEffect(()=>{
      const coleccionTicket = collection(db, "Ticket");
      getDocs(coleccionTicket).then(response =>{
        const ob = response.docs.map((doc)=>({
          Id : doc.id,
          Data : doc.data(),
        }))
        setLstTicket(ob);
      })
    },[]);
  
    const agregarTicket = (nuevoTicket)=>{
      const coleccionTicket = collection(db, "Ticket");
      addDoc(coleccionTicket, nuevoTicket)
      .then(response =>{
        const nuevoOb = {
          Id : response._key.path.segments[1],
          Data : nuevoTicket,
        }
        setLstTicket([...lstTicket, nuevoOb]);
      })
      .catch(err => console.log(err));
    }
  
    const modificarTicket = (tmpTicket, id)=>{
      const Item = {
        Id : id,
        Data : tmpTicket
      }
      const refTicket = doc(db, "Ticket", id);
      updateDoc(refTicket, tmpTicket)
      .then(response =>{
        setLstTicket(lstTicket.map((it) => (it.Id === id) ? Item : it));
      })
      .catch(err => console.log(err));
    }
  
    const eliminarTicket = (id)=>{
      const refTicket = doc(db, "Ticket", id);  
      deleteDoc(refTicket)
      .then(response =>{
        setLstTicket(lstTicket.filter((it) => (it.Id !== id)));
      })
      .catch(err => console.log(err));
    }

    const abrirDialogo = (accion, ob)=>{
      if (accion === 1){
        //Nuevo
        setAccion(1);
        const objeto = {Id:'', Data:{Nombre : '',Correo : '',Problema : ''}}
        setTicketSeleccionado(objeto);
      }
      else{
        //Modifcar
        setAccion(2);
        setTicketSeleccionado(ob);
      }
      setEstadoDialogo(true);
    }
    const Guardar = (ob, id)=>{
      if (ob===null){
        ///hizo cancelar 
      }
      else{
        //Viene la data
        if (accion===1)
          agregarTicket(ob);
        else{
          modificarTicket(ob,id);
        }
      }
      setEstadoDialogo(false);
    }

    return (
        <TicketContexto.Provider value={
          { abrirDialogo, Guardar, estadoDialogo, ticketSeleccionado, setTicketSeleccionado,
            lstTicket, setLstTicket, eliminarTicket}
          }>
          <ScreenListaTicket/>
          <ScreenDialogoTicket/>
        </TicketContexto.Provider>
    );
}