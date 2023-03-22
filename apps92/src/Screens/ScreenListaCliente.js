import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table, Button } from 'reactstrap';
import { useCliente } from '../Hooks/useCliente';

export function ScreenListaCliente(){
    const {abrirDialogo, lstClientes, eliminarCliente} = useCliente();
    
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>IdCliente</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>
                            <Button color='primary' onClick={()=>abrirDialogo(1, null)}>Agregar</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                        (lstClientes.length > 0) ? (
                            lstClientes.map((it, idx)=>(
                                <tr key={idx}>
                                    <td>{it.Data.idCliente}</td>
                                    <td>{it.Data.nombre}</td>
                                    <td>{it.Data.apellido}</td>
                                    <td>
                                        <Button color='secondary' onClick={()=>abrirDialogo(2, it)}>Editar</Button>
                                        <Button color='danger' onClick={()=>eliminarCliente(it.Id)}>Eliminar</Button>
                                    </td>
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