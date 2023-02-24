import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h3>Logo</h3>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/store"><li>Store</li></Link>
        <Link to="/checkout">Checkout</Link>
      </ul>
    </nav>
  );
}

export default Nav;
