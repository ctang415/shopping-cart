import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./Images";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div><h3>The Burnt Wick</h3></div>
      <ul>
        <div className="nav-links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/store"><li>Store</li></Link></div>
        <div className="nav-cart">
          <Link to="/checkout">
            <div><img className="nav-cart-image" alt="Shopping cart" src={ShoppingCart}></img>(0)</div>
            </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
