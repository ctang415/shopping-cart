import React, { useState, useEffect } from "react";


const Bag = ({ cart }) => {

  const [ total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((total, item) => total + (item.quantity) * (item.item.price), 0
    ))
  }, [setTotal])
  
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
              <span>Quantity: {item.quantity}</span>
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
