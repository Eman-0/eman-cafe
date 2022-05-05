import { useEffect, useState } from "react";

import classes from "./AvailableDrinks.module.css";
import Card from "../UI/Card";
import DrinkItem from "./DrinkItem/DrinkItem";

const AvailableDrinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);


  useEffect(() => {

    const fetchDrinks = async () => {
      const response = await fetch('https://qo4m1rpial.execute-api.us-east-2.amazonaws.com/drinks');
      if (!response.ok) {
        throw new Error('Something went wrong on our end');
      }
      const data = await response.json();
      const loadedDrinks = [];

      for (let i = 0; i < data.Count; i++) {
        loadedDrinks.push({
          id: data.Items[i].id,
          name: data.Items[i].name,
          description: data.Items[i].description,
          price: data.Items[i].price,
        });
      };
      
      setDrinks(loadedDrinks);
      setIsLoading(false);
    }

      fetchDrinks().catch((e) => {
        setIsLoading(false);
        setHttpError(e.message)
        });
    
  }, [])

  if (isLoading) {
    return(
      <section className={classes.DrinksLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.DrinksLoadingError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const drinkList = drinks.map((drink) => (
    <DrinkItem
      id={drink.id}
      key={drink.id}
      name={drink.name}
      description={drink.description}
      price={drink.price}
    />
  ));

  return (
    <section className={classes.drinks}>
      <Card>
        <ul>{drinkList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDrinks;
