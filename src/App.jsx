import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";
import Data from "./Components/Data";
import { useState } from "react";
import Pages from "./Pages/Pages";

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pages productItems={productItems} />} />
      </Routes>
    </>
  );
}

export default App;
