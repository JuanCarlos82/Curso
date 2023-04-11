import { Header } from "./componentes/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { agregarUsuario, cambiarNombre } from "./redux/usuarioSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(agregarUsuario({
      nombre : "Juan",
      login : "admin",
      email : "admin@algo.com"
  }));
  }, []);
  const handleCambiar = ()=>{
    dispatch(cambiarNombre("OtroNombre"));
  }
  return (
    <div>
      <Header/>
      <button onClick={handleCambiar}>Cambiar nombre</button>
    </div>
  );
}

export default App;