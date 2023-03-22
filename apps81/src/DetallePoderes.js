import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

export function DetallePoderes(props){
    let poderes = [];
    if (props.memberSelected !=null)
        poderes = props.memberSelected.powers;
    return(
        <Modal isOpen={props.estadoDetalle}>
            <ModalHeader>
                <div><h2>Detalle de los poderes</h2></div>
            </ModalHeader>
            <ModalBody>
                {
                    (poderes.length === 0) ?<p>No tiene poderes</p> : poderes.map((it, idx)=> (<p key={idx}>{it}</p>))
                }
            </ModalBody>
            <ModalFooter>
                <Button onClick={()=>props.setEstadoDetalle(false)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}