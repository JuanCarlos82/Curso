
import {Collapse, Navbar, Container, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../navbar.css'
export function NavBar(){
    return (
      <header>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" color="primary" dark>
          <Container>
            <NavbarBrand> Mi Proyecto </NavbarBrand>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/clientes">Usuarios</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/ticket">Ticket</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>      
    );
}
