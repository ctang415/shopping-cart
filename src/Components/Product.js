import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Error from "./Error";

const Product = ({ cart, setCart, products }) => {
  const matchId  = useParams()
  const location = useLocation()
  const [ product, setProduct ] = useState([])
  const [ isTrue, setIsTrue ] = useState(false)

  useEffect(() => {
    if (products.find(item => item.name === matchId.id) === undefined) {
      setIsTrue(true)
    } else {
      setProduct([products.find(item => item.name === matchId.id)])
      setIsTrue(false)
    }
  }, [isTrue, location.pathname])

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
      } else if (cart.find(x => x.item.name === product[0].name)) {
        console.log(cart.find(x => x.item.name === product[0].name))
        console.log(product[0].name)
      setCart(cart.map(item => item.item.name === product[0].name ? {...item, quantity: item.quantity + parseInt(inputValue.value)}
      : item))
    } else {
      setCart(cart => [...cart, {item: product[0], quantity: parseInt(inputValue.value)}])
      console.log('new')
    }
}

useEffect(() => {
  console.log(cart)
}, [])

  if (!isTrue) {
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