import { useEffect, useState } from "react";

import classes from "./AvailableDrinks.module.css";
import Card from "../UI/Card";
import DrinkItem from "./DrinkItem/DrinkItem";

const AvailableDrinks = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch('https://qo4m1rpial.execute-api.us-east-2.amazonaws.com/drinks');
      const data = await response.json();
      const loadedDrinks = [];

      for (let i = 0; i < data.Count; i++) {
        loadedDrinks.push({
          id: data.Items[i].id,
          name: data.Items[i].name,
          description: data.Items[i].description,
          price: data.Items[i].price,
        });
      }
      
      setDrinks(loadedDrinks);
    }

    fetchDrinks();
  }, [])

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
