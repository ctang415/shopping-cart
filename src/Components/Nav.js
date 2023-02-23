import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <h3>Logo</h3>
        <Link to="/"><li>Home</li></Link>
        <Link to="/store"><li>Store</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
