import React from "react";
import { Link } from "react-router-dom";

const Store = ( {products}) => {
  
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
