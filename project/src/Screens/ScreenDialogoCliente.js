
import { FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useCliente } from '../Hooks/useCliente';

export function ScreenDialogoCliente(){
    const {estadoDialogo, Guardar, clienteSeleccionado} = useCliente();

    const {register, handleSubmit, setValue} = useForm({
        shouldUseNativeValidation : true,
        defaultValues: clienteSeleccionado,
      });
      if (clienteSeleccionado!=null){
        setValue("idCliente", clienteSeleccionado.Data.idCliente);
        setValue("nombre", clienteSeleccionado.Data.nombre);
        setValue("apellido", clienteSeleccionado.Data.apellido);  
      }
    
      const onSubmit = (data, e) =>{
        Guardar(data, clienteSeleccionado.Id);
      }
    
      return (
        <Modal isOpen={estadoDialogo}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <div><h2>Datos de usuario</h2></div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>IdCliente : </label>
                <input className='form-control' type='text' {...register('idCliente', {required:true})}/>
              </FormGroup>
              <FormGroup>
                <label>Nombre : </label>
                <input className='form-control' type='text' {...register('nombre', {required:true})}/>
              </FormGroup>
              <FormGroup>
                <label>Apellido : </label>
                <input className='form-control' type='text' {...register('apellido', {required:true})}/>
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