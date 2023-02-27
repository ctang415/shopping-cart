import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products, cart, setCart }) => {

  const  matchId  = useParams()

  const myProduct = products.find(item => item.name === matchId.id) 

  const handleAdd = (e) => {
    const inputValue = document.querySelector('input')
    inputValue.value = parseInt(inputValue.value) + parseInt(1)
  }

  const handleSubtract = (e) => {
    const inputValue = document.querySelector('input')
    if (inputValue.value > 1 ) {
    inputValue.value = parseInt(inputValue.value) - parseInt(1)
    }
  }

  const addToCart = (e) => {
    const inputValue = document.querySelector('input')
    setCart(cart => [...cart, {item: myProduct, quantity: inputValue.value}])
  }

  return (
    <div className="product-page">
      <img src={myProduct.url} alt="Candle" className="product-page-image"></img>
      <div className="product-page-info">
        <h1>{myProduct.name}</h1>
        <span>${myProduct.price}</span>
        <div className="product-page-quantity">
          <span>Quantity: </span> 
          <button onClick={handleAdd}>+</button> 
          <input type='number' defaultValue={1}></input> 
          <button onClick={handleSubtract}>-</button>
        </div>
        <button onClick={addToCart}>Add to Bag</button>
      </div>
    </div>
  );
}

export default Product;
