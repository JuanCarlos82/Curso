import {Collapse, Navbar, Container, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../navbar.css'
export function NavBar(){
    return (
      <header>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <Container>
            <NavbarBrand>Mi Proyecto</NavbarBrand>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/clientes">Usuarios</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>  
    );
}