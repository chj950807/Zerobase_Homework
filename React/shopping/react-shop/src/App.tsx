import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import ProductInfo from "./components/product/ProductInfo";
import Total from "./components/Total";
import Fashion from "./components/category/Fashion";
import Accessory from "./components/category/Accessory";
import Digital from "./components/category/Digital";
import CartList from "./components/cart/CartList";
import Notfound from "./components/category/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Total />} />
        <Route path="/:productId" element={<ProductInfo />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="accessory" element={<Accessory />} />
        <Route path="digital" element={<Digital />} />
        <Route path="cart" element={<CartList />} />
        <Route path="grocery" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
