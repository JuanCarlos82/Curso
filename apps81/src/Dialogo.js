import { FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
export function Dialogo(props) {
  const {register, handleSubmit} = useForm({
    shouldUseNativeValidation : true,
  });

  const onSubmit = (data, e) =>{
    props.addMember(data);
  }

  return (
    <Modal isOpen={props.estado}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <div><h2>Agregando miembro</h2></div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Edad : </label>
            <input className='form-control' type='text' {...register('age', {required:true})}/>
          </FormGroup>
          <FormGroup>
            <label>Nombre : </label>
            <input className='form-control' type='text' {...register('name', {required:true})}/>
          </FormGroup>
          <FormGroup>
            <label>Identidad secreta : </label>
            <input className='form-control' type='text' {...register('secret', {required:true})}/>
          </FormGroup>
          <FormGroup>
            <label>Poderes: </label>
            <input className='form-control' type='text' {...register('powers', {required:true})}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type='submit'>Aceptar</Button>
          <Button onClick={()=>props.setEstadoDialog(false)}>Cerrar</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
