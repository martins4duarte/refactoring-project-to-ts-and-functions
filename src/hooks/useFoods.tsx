import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services";

interface FoodProviderProps {
  children: ReactNode;
}

export interface Foods {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string,
}

interface FoodsContextData {
  foods: Foods[];
  handleAddFood: (food: Foods) => void;
  handleDeleteFood: (id: number) => void;
  handleUpdateFood: (editingFood: Foods, food: Foods) => void;
}


const FoodsContext = createContext<FoodsContextData>({} as FoodsContextData);

export function FoodsProvider({ children }: FoodProviderProps): JSX.Element {

  const [foods, setFoods] = useState<Foods[]>([]);

  useEffect(() => {
    async function loadFoods() {
      const response = await api.get('/foods')
      setFoods(response.data)
    }
    loadFoods();
  }, [])

  async function handleAddFood(food: Foods) {
    try {
      const newFood = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoods(foods => [...foods, newFood.data])
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);

    setFoods(foodsFiltered);
    console.log(id, "ok")
  }

  const handleUpdateFood = async (food: Foods, editingFood: Foods) => {
    try {
      console.log({ "editedFood": editingFood, "food": food})

      const foodUpdated = await api.put(
        `/foods/${food.id}`,
        editingFood,
      );
      
      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );
      
      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <FoodsContext.Provider
      value={{ foods, handleAddFood, handleDeleteFood, handleUpdateFood}}
    >
      {children}
    </FoodsContext.Provider>
  )
}

export function useFoods(): FoodsContextData {
  const context = useContext(FoodsContext);

  return context;
}