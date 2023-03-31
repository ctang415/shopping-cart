import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";

const Product = ({ cart, setCart }) => {
  const matchId  = useParams()
  
  const listOfProducts = [ 
    {url: ItemOne, name:'Forest', price: 24.99}, {url: ItemTwo, name:'Amber', price: 19.99}, 
    {url: ItemThree, name:'Smokey Wood', price: 29.99}, {url: ItemFour, name:'Pine Forest', price: 24.99}, 
    {url: ItemFive, name:'Bergamot', price: 19.99}, {url: ItemSix, name: 'Sev', price: 14.99} 
  ]
  const [ product, setProduct ] = useState([])
  const [ isTrue, setIsTrue ] = useState(false)

  useEffect(() => {
    setProduct([listOfProducts.find(item => item.name === matchId.id)])
    if (listOfProducts.find(item => item.name === matchId.id) === undefined) {
      setIsTrue(true)
    }
    console.log(product)
  }, [])

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
    if (product.name) {
    const inputValue = document.querySelector('input')
    if (inputValue.value < 0 || inputValue.value === '') {
      inputValue.value = 0
      e.preventDefault()
    }
    if (cart.find(x => x.item.name === product.name)) {
      setCart(cart.map(item => item.item.name === product.name ? {...item, quantity: item.quantity + parseInt(inputValue.value)}
      : item))
    } else {
      setCart(cart => [...cart, {item: product, quantity: parseInt(inputValue.value)}])
    }
    }
  }

    if (isTrue === false) {
  return (
    product.map(myProduct => {
      return (
      <div key={myProduct.name} className="product-page">
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
      )
    })
  );
    } else {
      return (
        <Error/>
      )
    }
}

export default Product;

/*
      product.map(myProduct => {
        <div className="product-page">
     <img src={myProduct} alt="Candle" className="product-page-image"></img>
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
      })
      */