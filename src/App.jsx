import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Shop } from "./components/shop";
import { About } from "./components/about";
import { Details } from "./components/product-details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Product } from "./components/product";
import { Cart } from "./components/cart";
function App() {
  const cartCounter = () => {
    setCounter(counter + 1);
  };
  let [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <Navbar counter={counter}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop cartCounter={cartCounter} />} />
        <Route element={<Product />} />
        <Route path="/shop/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
