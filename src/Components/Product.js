import React from "react";
import { useParams } from "react-router-dom";


const Product = ({ products }) => {

  const  matchId  = useParams()

  const myProduct = products.find(item => item.name === matchId.id) 

  return (
    <div className="product-page">
      <img src={myProduct.url} className="product-page-image"></img>
      <div className="product-page-info">
        <h1>{myProduct.name}</h1>
        <span>{myProduct.price}</span>
        <div className="product-page-quantity">
          <span>Quantity: </span> 
          <button>+</button> 
          <input type='number'></input> 
          <button>-</button>
        </div>
        <button>Add to Bag</button>
      </div>
    </div>
  );
}

export default Product;
