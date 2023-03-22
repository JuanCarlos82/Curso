import {useState, useEffect} from 'react'
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../Firebase/Firebase';
import { ScreenListaCliente } from '../Screens/ScreenListaCliente';
import { ScreenDialogoCliente } from '../Screens/ScreenDialogoCliente';
import { ClienteContexto } from '../Hooks/ClienteContexto';

export function Cliente(){
    const [lstClientes, setLstClientes] = useState([]);
    const [estadoDialogo, setEstadoDialogo] = useState(false);
    const [accion, setAccion] = useState(null);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

    useEffect(()=>{
      const coleccionCliente = collection(db, "Cliente");
      getDocs(coleccionCliente).then(response =>{
        const ob = response.docs.map((doc)=>({
          Id : doc.id,
          Data : doc.data(),
        }))
        setLstClientes(ob);
      })
    },[]);
  
    const agregarCliente = (nuevoCliente)=>{
      const coleccionCliente = collection(db, "Cliente");
      addDoc(coleccionCliente, nuevoCliente)
      .then(response =>{
        const nuevoOb = {
          Id : response._key.path.segments[1],
          Data : nuevoCliente,
        }
        setLstClientes([...lstClientes, nuevoOb]);
      })
      .catch(err => console.log(err));
    }
  
    const modificarCliente = (tmpCliente, id)=>{
      const Item = {
        Id : id,
        Data : tmpCliente
      }
      const refCliente = doc(db, "Cliente", id);
      updateDoc(refCliente, tmpCliente)
      .then(response =>{
        setLstClientes(lstClientes.map((it) => (it.Id === id) ? Item : it));
      })
      .catch(err => console.log(err));
    }
  
    const eliminarCliente = (id)=>{
      const refCliente = doc(db, "Cliente", id);  
      deleteDoc(refCliente)
      .then(response =>{
        setLstClientes(lstClientes.filter((it) => (it.Id !== id)));
      })
      .catch(err => console.log(err));
    }

    const abrirDialogo = (accion, ob)=>{
      if (accion === 1){
        //Nuevo
        setAccion(1);
        const objeto = {Id:'', Data:{idCliente : '',nombre : '',apellido : ''}}
        setClienteSeleccionado(objeto);
      }
      else{
        //Modifcar
        setAccion(2);
        setClienteSeleccionado(ob);
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
          agregarCliente(ob);
        else{
          modificarCliente(ob,id);
        }
      }
      setEstadoDialogo(false);
    }

    return (
        <ClienteContexto.Provider value={
          { abrirDialogo, Guardar, estadoDialogo, clienteSeleccionado, setClienteSeleccionado,
            lstClientes, setLstClientes, eliminarCliente}
          }>
          <ScreenListaCliente/>
          <ScreenDialogoCliente/>
        </ClienteContexto.Provider>
    );
}