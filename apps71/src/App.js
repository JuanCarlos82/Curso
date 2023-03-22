import { Fragment, useEffect, useRef, useState } from "react";
import { Lista } from "./Lista";

function App() {
  //Hook useState, useRef, useEffect
  const [cliente, setCliente] = useState([]);
  const refId = useRef();
  const refNom = useRef();
  const refApe = useRef();

  useEffect(()=>{
    const clientesAlmacenados = JSON.parse(localStorage.getItem("lstClientes"));
    if (clientesAlmacenados)
      setCliente(clientesAlmacenados);
  }, []);
  useEffect(()=>{
    localStorage.setItem("lstClientes", JSON.stringify(cliente));
  }, [cliente]);


  const oyenteClickAgregar = () => {
      const mId = refId.current.value;
      const mNom = refNom.current.value;
      const mApe = refApe.current.value;

      refId.current.value = null;
      refNom.current.value = null;
      refApe.current.value = null;

      const nuevoCliente = {
        Id:mId, Nombre: mNom, Apellido: mApe
      };
      setCliente((datAnterior)=>{
          return [...datAnterior, nuevoCliente];
      });
  }

  return (
    <Fragment>
      <h1>Lista de personas</h1>
      <Lista items={cliente}/>
      <input ref = {refId} type="text" placeholder="Digite el Id"/>
      <input ref = {refNom} type="text" placeholder="Digite el Nombre"/>
      <input ref = {refApe} type="text" placeholder="Digite el Apellido"/>
      <button onClick={oyenteClickAgregar}>Agregar cliente</button>
    </Fragment>
  );
}
export default App;
