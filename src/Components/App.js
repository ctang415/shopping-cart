import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import Product from "./Product";
import Bag from "./Bag";
import Footer from "./Footer"
import Error from "./Error";

const App = () => {

  const [ cart, setCart ] = useState([])

  return (
    <div className="page-container">
      <div className="content-wrapper">
      <Nav cart={cart}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/store" exact element={<Store/>} />
          <Route path="/checkout" element={<Bag cart={cart} setCart={setCart} />} />
          <Route path="/store/:id" element={<Product cart={cart} setCart={setCart}/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        </div>
        <Footer/>
        </div>
  );
}

export default App;
