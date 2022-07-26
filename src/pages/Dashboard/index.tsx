import Food from '../../components/Food'

import { FoodsContainer } from './styles'
import { Foods, useFoods } from '../../hooks/useFoods'
import Header from '../../components/Header';
import ModalAddFood from '../../components/ModalAddFood';
import { useState } from 'react';
import ModalEditFood from '../../components/ModalEditFood';
import ModalDeleteFood from '../../components/ModalDeleteFood';



export default function Dashboard() {

  const { foods, handleAddFood, handleUpdateFood, handleDeleteFood } = useFoods();
  const [ editingFood, setEditingFood ] = useState<Foods>({} as Foods)
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const [ foodId, setFoodId ] = useState<number>(0)
  const [ editModalIsOpen, setEditModalIsOpen ] = useState<boolean>(false)
  const [ deleteModalIsOpen, setDeleteModalIsOpen ] = useState<boolean>(false)
  
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const toggleEditModal = () => {
    setEditModalIsOpen(!editModalIsOpen)
  }

  const toggleDeleteModal = () => {
    setDeleteModalIsOpen(!deleteModalIsOpen)
  }

  const handleEditFoodModal = (food: Foods) => {
    setEditingFood(food)
    toggleEditModal();
  }

  const handleDeleteFoodModal = (id: number) => {
    setFoodId(id)
    toggleDeleteModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />

      <ModalAddFood
        isOpen={isOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />

      <ModalEditFood
        isOpen={editModalIsOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <ModalDeleteFood
        isOpen={deleteModalIsOpen}
        setIsOpen={toggleDeleteModal}
        foodId={foodId}
        handleDeleteFood={handleDeleteFood}
      />


      <FoodsContainer>
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={() => handleDeleteFoodModal(food.id)}
              handleEditFood={handleEditFoodModal}
            />
          ))}
      </FoodsContainer>
    </>
  )
}
