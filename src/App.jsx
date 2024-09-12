import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";
import Data from "./Components/Data";
import { useState } from "react";
import Pages from "./Pages/Pages";
import Cart from "./Common/Cart/Cart";

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Pages productItems={productItems} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart productItems={productItems} addToCart={addToCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
