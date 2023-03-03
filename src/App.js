import { Fragment, useState } from "react";
import CartProvider from "./store/CartProvider";
import { Header } from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsDisplayed, setCartISDisplay] = useState(false);

  const showCartHandler = () => {
    setCartISDisplay(true);
  };
  const hideCartHandler = () => {
    setCartISDisplay(false);
  };
  return (
    <CartProvider>
      {cartIsDisplayed && <Cart onHideCartHandler={hideCartHandler} />}

      <Header onShowCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
