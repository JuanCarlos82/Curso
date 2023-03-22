import { Fragment, useEffect, useState } from 'react';
import './App.css';
import * as API from './API/peticiones';
import {Tabla} from './Tabla';
import {Dialogo} from './Dialogo';
import { DetallePoderes } from './DetallePoderes';

function App() {
  //hook para el manejo de miembros
  const [members, setMembers] = useState([]);
  //hoos para manajar el estado del dialogo
  const [estadoDialogo, setEstadoDialogo] = useState(false);
  const [estadoDetalle, setEstadoDetalle] = useState(false);
  //hook para saber cual es el miembro seleccionado
  const [memberSelected, setMemberSelected] = useState(null);


  //Con array vacio se monta al inicio y se desmonta una vez
  //se ha renderizado.
  useEffect(()=> {
    API.getSuperHeroes()
    .then(dat=>{
      setMembers(dat.members);
    })
  }, []);


 const agregarMiembro = (mb)=>{
    if (mb !=null){
      const nuevo = {
        age : mb.age,
        name : mb.name,
        secretIdentity : mb.secret,
        powers : [mb.powers]
      }
      setMembers([...members, nuevo]);
    } 
    setEstadoDialogo(false);
 }
 const procesarDetalle = (it)=>{
    setMemberSelected(it);
    setEstadoDetalle(true)
 }

  return (
    <Fragment>
      <h1 className='App'>Team</h1>
      <Tabla members={members} estado={estadoDialogo} setEstadoDialog={setEstadoDialogo} 
      procesarDetalle={procesarDetalle} 
      estadoDetalle={estadoDetalle}
      setEstadoDetalle={setEstadoDetalle}/>
      <Dialogo estado={estadoDialogo} setEstadoDialog={setEstadoDialogo} addMember={agregarMiembro}/>
      <DetallePoderes estadoDetalle={estadoDetalle} setEstadoDetalle={setEstadoDetalle}
      memberSelected={memberSelected}/>
    </Fragment>
  );
}
export default App;
