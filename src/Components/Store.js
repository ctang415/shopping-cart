import React from "react";
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import { Link } from "react-router-dom";


const Store = () => {
  const images = [ 
    {url: ItemOne, name:'Forest', price:'$24.99'}, {url:ItemTwo, name:'Amber', price:'$19.99'}, 
    {url: ItemThree, name:'Smokey Wood', price:'$29.99'}, {url: ItemFour, name:'Pine Forest', price:'$24.99'}, 
    {url: ItemFive, name:'Bergamot', price:'$19.99'}, {url: ItemSix, name: 'Sev', price: '$14.99'} ]
  return (
    <div className="store-page">
      <h1>Products</h1>
      <div className="store-images">
      {images.map((image) => {
        return (
          <div key={image.url} className="store-items">
              <img src={image.url} className="store-image" alt="Candle"></img>
              <div className="store-information">
                <span>{image.name}</span>
                <span>{image.price}</span>
              </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Store;
