import { Fragment } from "react";
import { Lista } from "./Lista";

function App() {

  const arreglo = [
    {Id:1, Nombre: "Adan"},
    {Id:2, Nombre: "Mario"},
    {Id:3, Nombre: "Oscar"},
  ];

  return (
    <Fragment>
      <h1>Lista de personas</h1>
      <Lista items={arreglo}/>
    </Fragment>
  );
}
export default App;
