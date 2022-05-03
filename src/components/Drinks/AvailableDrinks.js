import dummyDrinks from "./DummyDrinkData";
import classes from "./AvailableDrinks.module.css";
import Card from "../UI/Card";
import DrinkItem from "./DrinkItem/DrinkItem";

const AvailableDrinks = () => {
  const drinkList = dummyDrinks.map((drink) => (
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
