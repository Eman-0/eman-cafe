import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
import { isEmpty, isValidPostal } from "./validation-utils";

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    postal: true,
  });
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredValidName = !isEmpty(enteredName);
    const enteredValidAddress = !isEmpty(enteredAddress);
    const enteredValidPostal = isValidPostal(enteredPostal);
    const enteredValidCity = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredValidName,
      address: enteredValidAddress,
      city: enteredValidCity,
      postal: enteredValidPostal,
    });

    const isFormValid =
      enteredValidName &&
      enteredValidAddress &&
      enteredValidCity &&
      enteredValidPostal;

    if (!isFormValid) {
      return;
    }

    props.onSubmit({
        name: enteredName,
        address: enteredAddress,
        city: enteredCity,
        postal: enteredPostal
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${
          formInputValidity.address ? "" : classes.invalid
        }`}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>Please enter a valid address</p>}
      </div>
      <div className={`${classes.control} ${
          formInputValidity.postal ? "" : classes.invalid
        }`}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
