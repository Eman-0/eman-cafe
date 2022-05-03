import DrinksSummary from "./DrinksSummary";
import AvailableDrinks from "./AvailableDrinks";
import { Fragment } from "react";

const Drinks = () => {
    return (
        <Fragment>
            <DrinksSummary />
            <AvailableDrinks />
        </Fragment>
    );
}

export default Drinks;