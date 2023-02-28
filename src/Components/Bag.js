import React, { useState, useEffect } from "react";


const Bag = ({ cart, setCart }) => {

  const [ total, setTotal] = useState(0)

  const removeFromCart = (e) => {
    setCart(cart.filter(item => item.item.name !== e.target.parentNode.id ))
  }

  const increaseCart = (e) => {
    const inputValue = document.querySelector(`input[name='${e.target.parentNode.id}']`)
    inputValue.value = parseInt(inputValue.value) + 1
    setCart(cart.map(item => item.item.name === e.target.parentNode.id ? {...item, quantity: item.quantity + 1}
    : item))
  }

  const decreaseCart = (e) => {
    const inputValue = document.querySelector(`input[name='${e.target.parentNode.id}']`)
    if (parseInt(inputValue.value) > 1) {
      inputValue.value = inputValue.value - 1
      setCart(cart.map(item => item.item.name === e.target.parentNode.id ? {...item, quantity: item.quantity - 1 }
    : item))
    }
  }

  const handleBlur = (e) => {
    if (parseInt(e.target.value) > 0) {
      setCart(cart.map(item => item.item.name === e.target.parentNode.id ? {...item, quantity: parseInt(e.target.value) }
      : item))
    } else if (parseInt(e.target.value) < 0) {
      let previousInput = cart.find(item => item.item.name === e.target.parentNode.id)
      e.target.value = parseInt(previousInput.quantity)
    }
  }

  const removeSymbols = (e) => {
      let input = document.querySelector('input');
      input.value = parseInt(input.value.toString().replace('+', '').replace('-', ''))
  }
  
  useEffect(() => {
    setTotal(cart.reduce((total, item) => total + (item.quantity) * (item.item.price), 0
    ))
  }, [cart])

  if (cart.length === 0) {
  return (
    <div className="shopping-bag-zero">
      <h1>Check Out</h1>
      <div className="shopping-bag-empty">
      <span className="shopping-bag-empty">Your cart is empty</span>
      </div>
    </div>
  );
  } return (
    <div className="shopping-bag">
      <h1>Check Out</h1>
      <div>
      {cart.map(item => {
        return (
          <div key={item.item.name} className="shopping-bag-items">
            <div>
              <img className="shopping-bag-image" alt="Candle" src={item.item.url}></img>
            </div>
            <div className="shopping-bag-text">
              <span>{item.item.name}</span>
              <span>${item.item.price}</span>
              <div id={item.item.name} className="shopping-bag-quantity">
                <span>Quantity: </span>
                <button onClick={increaseCart}>+</button>
                <input name={item.item.name} type="number" inputMode="numeric" onKeyUp={removeSymbols} onBlur={handleBlur} defaultValue={item.quantity}></input>
                <button onClick={decreaseCart}>-</button>
                <button onClick={removeFromCart}>X</button>
              </div>
            </div>
          </div>
        )
      })}
      </div>
      <span className="shopping-bag-total">Total: ${parseFloat(total).toFixed(2)} </span>
    </div>
  )
}

export default Bag;
