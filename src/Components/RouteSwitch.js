import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import Product from "./Product";
import Bag from "./Bag";
import Footer from "./Footer"
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import { useState } from "react";

const RouteSwitch = () => {

  const listOfProducts = [ 
    {url: ItemOne, name:'Forest', price:'$24.99'}, {url:ItemTwo, name:'Amber', price:'$19.99'}, 
    {url: ItemThree, name:'Smokey Wood', price:'$29.99'}, {url: ItemFour, name:'Pine Forest', price:'$24.99'}, 
    {url: ItemFive, name:'Bergamot', price:'$19.99'}, {url: ItemSix, name: 'Sev', price: '$14.99'} ]

  const [ products, setProducts ] = useState(listOfProducts)

  const [ cart, setCart ] = useState([])

  return (
    <BrowserRouter>
    <div className="page-container">
          <div className="content-wrapper">
      <Nav cart={cart}/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/store" exact element={<Store products={products}/>} />
          <Route path="/checkout" element={<Bag/>} />
          <Route path="/store/:id" element={<Product products={products}/>} />
        </Routes>
        </div>
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
