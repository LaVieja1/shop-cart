import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  function handleProductAdded(product) {
    const newCartItems = [...cartItems];

    const pickedItem = newCartItems.find(
      (item) => item.title === product.title,
    );

    if (pickedItem) {
      pickedItem.quantity += product.quantity;
      setCartItems(newCartItems);
      return;
    }

    newCartItems.push(product);
    setCartItems(newCartItems);
  }

  const cartProductsCount = cartItems.reduce((accum, item) => {
    return accum + item.quantity;
  }, 0);

  return (
    <>
      <Header cartLength={cartProductsCount} />
      <Outlet context={{ handleProductAdded, cartItems, setCartItems }} />
    </>
  )
}