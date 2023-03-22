import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from './Componentes/Home';
import {Cliente} from './Componentes/Cliente';
import { NavBar } from './Componentes/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/clientes' Component={Cliente}/>        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
