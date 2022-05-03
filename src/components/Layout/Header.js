import { Fragment } from "react";
import coffeeImg from '../../assets/coffee-background.jpg';
import CartButton from "./CartButton";
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Eman's Cafe</h1>
                <CartButton />
            </header>
            <div className={classes['main-image']}>
            <img src={coffeeImg} alt='cofee-img'/>
            </div>
        </Fragment>
    );
}

export default Header;