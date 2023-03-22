import {useState, useEffect} from 'react'
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from './Firebase/Firebase';

function App() {
  const [lstClientes, setLstClientes] = useState([]);

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

  const agregarCliente = ()=>{
    const nuevoCliente = {
        idCliente : 3,
        nombre : "Carlos",
        apellido : "Menendez",
    }
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

  const modificarCliente = ()=>{
    const id = "xnrALsfPz4ZpglkYVKBb";
    const tmpCliente = {
        idCliente : 3,
        nombre : "Carlos alberto jose",
        apellido : "Menendez perez parado",
    }
    const Item = {
      Id : id,
      Data : tmpCliente
    }
    const refCliente = doc(db, "Cliente", id);
  
    updateDoc(refCliente, tmpCliente)
    .then(response =>{
      //debugger
      setLstClientes(lstClientes.map((it) => (it.Id === id) ? Item : it));
    })
    .catch(err => console.log(err));
  }

  const eliminarCliente = ()=>{
    const id = "VSdcwny78nBKbXZBSEyp";
    const refCliente = doc(db, "Cliente", id);  
    deleteDoc(refCliente)
    .then(response =>{
      setLstClientes(lstClientes.filter((it) => (it.Id !== id)));
    })
    .catch(err => console.log(err));
  }


  return (
    <div>
      <button onClick={agregarCliente}>Agregar</button>
      <button onClick={modificarCliente}>Modficar</button>
      <button onClick={eliminarCliente}>Eliminar</button>
      <ul>
        {
          lstClientes.map((it, idx) => (<li key={idx}>
            {it.Id} {it.Data.idCliente} {it.Data.nombre} {it.Data.apellido}
            </li>))
        }
      </ul>
    </div>
  );
}

export default App;
