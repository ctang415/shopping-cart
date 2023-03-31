import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";

const Store = () => {
  const listOfProducts = [ 
    {url: ItemOne, name:'Forest', price: 24.99}, {url:ItemTwo, name:'Amber', price: 19.99}, 
    {url: ItemThree, name:'Smokey Wood', price: 29.99}, {url: ItemFour, name:'Pine Forest', price: 24.99}, 
    {url: ItemFive, name:'Bergamot', price: 19.99}, {url: ItemSix, name: 'Sev', price: 14.99} ]

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    setProducts(listOfProducts)
  }, [setProducts])

  return (
    <div className="store-page">
      <h1>Products</h1>
      <div className="store-images">
      {products.map((item) => {
        return (
          <div key={item.name} className="store-items">
            <Link to={`./${item.name}`}>
              <img src={item.url} className="store-image" alt="Candle"></img>
              <div className="store-information">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              </Link>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Store;
