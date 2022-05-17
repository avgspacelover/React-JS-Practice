import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// cant throw error inside a promise because it will cause the promise to reject


const AvailableMeals = () => {

  const [meals, setMeals] =useState([]);
  const [isLoading , setIsLoading] =useState(true);
  const [httpError, setHttpError] = useState();

  useEffect( () => {

    const fetchMeals = async() => {

      const response = await fetch('https://reactcg-http-default-rtdb.firebaseio.com/Meals.json')

      if(!response.ok){
        throw new Error("Failed to Fetch")

      }
      const responseData = await response.json();

      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id:key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false)

    }
    
      fetchMeals().catch(error => {  // HACKS to error handle=> catching the error we are getting

        setIsLoading(false);
        setHttpError(error.message)
      });
    
   

  },[])


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if(isLoading){
    return (
    <section className={classes.MealsLoading}>
      Loading
    </section>
    )
  }

  if(httpError){
    return (

      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>

    )
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


/*

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

*/