import "./App.css";
// Start Components
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Shop } from "./components/shop";
import { Details } from "./components/product-details";
import { Cart } from "./components/cart";
import { Signup } from "./components/sign-up";
import { Signin } from "./components/sign-in";
import { Notfound } from "./components/not-found";
import { Counter } from "./components/counter/Counter";

// End Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
