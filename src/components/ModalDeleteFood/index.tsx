import ModalConfirm from '../ModalConfirm'
import { Container } from './styles';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  foodId: number;
  handleDeleteFood: (id: number) => void;
}

export default function ModalDeleteFood({ isOpen, setIsOpen, foodId, handleDeleteFood }: Props) {

  function handleRemove(){
    handleDeleteFood(foodId);
    setIsOpen();
  }

  function handleCancel(){
    setIsOpen();
  }

  return (
    <ModalConfirm isOpen={isOpen} setIsOpen={setIsOpen}>
        <Container>
          <p>Are you sure?</p>
          <div style={{display: "flex", flexDirection: "row"}}>
            <button onClick={handleRemove} className='remove'>Remover</button>
            <button onClick={handleCancel} className='cancel'>Cancelar</button>
          </div>
        </Container>
    </ModalConfirm>
  )
}
