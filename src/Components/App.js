import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import Product from "./Product";
import Bag from "./Bag";
import Footer from "./Footer"
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  
  const clickHandler = (e) => {
    navigate('/store')
  }

  const listOfProducts = [ 
    {url: ItemOne, name:'Forest', price: 24.99}, {url:ItemTwo, name:'Amber', price: 19.99}, 
    {url: ItemThree, name:'Smokey Wood', price: 29.99}, {url: ItemFour, name:'Pine Forest', price: 24.99}, 
    {url: ItemFive, name:'Bergamot', price: 19.99}, {url: ItemSix, name: 'Sev', price: 14.99} ]

  const [ products, setProducts ] = useState([])

  const [ cart, setCart ] = useState([])

  useEffect(() => {
    setProducts(listOfProducts)

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="page-container">
      <div className="content-wrapper">
      <Nav cart={cart}/>
        <Routes>
          <Route path="/" exact element={<Home clickHandler={clickHandler}/>} />
          <Route path="/store" exact element={<Store products={products}/>} />
          <Route path="/checkout" element={<Bag cart={cart} setCart={setCart} />} />
          <Route path="/store/:id" element={<Product products={products} cart={cart} setCart={setCart}/>} />
        </Routes>
        </div>
        <Footer/>
        </div>
  );
}

export default App;
