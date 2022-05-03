import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Drinks from './components/Drinks/Drinks';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
      <main>
        <Drinks />
      </main>
    </CartProvider>
  );
}

export default App;
