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

  const removeSymbols = (e) => {
    const inputValue = document.querySelector('input')
    inputValue.value = parseInt(inputValue.value.toString().replace('+', '').replace('-', ''))
  }

  const addToCart = (e) => {
    const inputValue = document.querySelector('input')
    if (inputValue.value < 0 || inputValue.value === '') {
      inputValue.value = 0
      e.preventDefault()
    }
    if (cart.find(x => x.item.name === myProduct.name)) {
      setCart(cart.map(item => item.item.name === myProduct.name ? {...item, quantity: item.quantity + parseInt(inputValue.value)}
      : item))
    } else {
      setCart(cart => [...cart, {item: myProduct, quantity: parseInt(inputValue.value)}])
    }
    }

  return (
    <div className="product-page">
      <img src={myProduct.url} alt="Candle" className="product-page-image"></img>
      <div className="product-page-info">
        <h1>{myProduct.name}</h1>
        <span>${myProduct.price}</span>
        <div className="product-page-quantity">
          <span>Quantity: </span>
          <div className="product-page-buttons">
            <button onClick={handleAdd}>+</button> 
          <input type='number' inputMode="numeric" onKeyUp={removeSymbols} defaultValue={1}></input> 
          <button onClick={handleSubtract}>-</button>
        </div>
        </div>
        <button onClick={addToCart}>Add to Bag</button>
      </div>
    </div>
  );
}

export default Product;
