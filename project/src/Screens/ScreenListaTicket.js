import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table, Button } from 'reactstrap';
import { useTicket } from '../Hooks/useTicket';

import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export function ScreenListaTicket(args){
    const {abrirDialogo, lstTicket, eliminarTicket} = useTicket();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        
        <Container>
            <Table striped>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Problema</th>
                        <th>
                            <Button color='btn btn-outline-primary' onClick={()=>abrirDialogo(1, null)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg> Agregar</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                        (lstTicket.length > 0) ? (
                            lstTicket.map((it, idx)=>(
                                <tr key={idx}>
                                    <td>{it.Data.Nombre}</td>
                                    <td>{it.Data.Correo}</td>
                                    <td>{it.Data.Problema}</td>
                                    <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <Button color='btn btn-outline-secondary' onClick={()=>abrirDialogo(2, it)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg> Actualizar</Button>
                                        <Button color='btn btn-outline-danger' onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg> Eliminar</Button>
                                        <Modal isOpen={modal} toggle={toggle} {...args}>
                                            <ModalHeader toggle={toggle}>Eliminar</ModalHeader>
                                                <ModalBody>
                                                    Seguro que desea eliminar el ticket???</ModalBody>
                                            <ModalFooter>
                                                <Button color="btn btn-outline-primary" onClick={()=>eliminarTicket(it.Id)}>Eliminar</Button>{' '}
                                                <Button color="btn btn-outline-secondary" onClick={toggle}>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
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