import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import Product from "./Product";
import Bag from "./Bag";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/checkout" element={<Bag/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
