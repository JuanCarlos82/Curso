import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table, Button } from 'reactstrap';
export function Tabla(props){
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Edad</th>
                        <th>Nombre</th>
                        <th>Identidad secreta</th>
                        <th>
                            <Button color='primary' onClick={() => props.setEstadoDialog(true)}>Agregar</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.members.length > 0) ? (
                            props.members.map((it, idx)=>(
                                <tr key={idx}>
                                    <td>{it.age}</td>
                                    <td>{it.name}</td>
                                    <td>{it.secretIdentity}</td>
                                    
                                    <td><Button color='secondary' onClick={()=>props.procesarDetalle(it)}>Poderes</Button></td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan={3}>No hay registros</td></tr>
                        ) 
                    }
                </tbody>
            </Table>
        </Container>
    );
}