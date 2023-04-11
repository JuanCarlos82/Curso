
import { FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useTicket } from '../Hooks/useTicket';

export function ScreenDialogoTicket(){
    const {estadoDialogo, Guardar, ticketSeleccionado} = useTicket();

    const {register, handleSubmit, setValue} = useForm({
        shouldUseNativeValidation : true,
        defaultValues: ticketSeleccionado,
      });
      if (ticketSeleccionado!=null){
        setValue("Nombre", ticketSeleccionado.Data.Nombre);
        setValue("Correo", ticketSeleccionado.Data.Correo);
        setValue("Problema", ticketSeleccionado.Data.Problema);  
      }
    
      const onSubmit = (data, e) =>{
        Guardar(data, ticketSeleccionado.Id);
      }
    
      return (
        <Modal isOpen={estadoDialogo}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <div><h2>Ticket</h2></div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>Nombre : </label>
                <input className='form-control' type='text' {...register('Nombre', {required:true})}/>
              </FormGroup>
              <FormGroup>
                <label>Correo : </label>
                <input className='form-control' type='text' {...register('Correo', {required:true})}/>
              </FormGroup>
              <FormGroup>
                <label>Problema : </label>
                <input className='form-control' type='text' {...register('Problema', {required:true})}/>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type='submit' color="btn btn-outline-primary">Aceptar</Button>
              <Button color="btn btn-outline-secondary" onClick={()=>Guardar(null)}>Cerrar</Button>
            </ModalFooter>
          </form>
        </Modal>
    );
}