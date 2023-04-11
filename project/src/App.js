import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from './Componentes/Home';
import {Cliente} from './Componentes/Cliente';
import {Ticket} from './Componentes/Ticket';
import { NavBar } from './Componentes/NavBar';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/clientes' Component={Cliente}/>  
        <Route path='/ticket' Component={Ticket}/>     
      </Routes>

    </BrowserRouter>
  );
}

export default App;
