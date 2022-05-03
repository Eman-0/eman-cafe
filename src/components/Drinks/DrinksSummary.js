import classes from './DrinksSummary.module.css';

const DrinksSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Coffee straight from the heart of Italy</h2>
            <p>
                Choose your favorite drink from our selection of 
                Italian coffee.
            </p>
            <p>
                All of our coffee is freshly imported from Italy.
            </p>
        </section>
    );
}

export default DrinksSummary;