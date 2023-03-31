import React from "react";
import { Link } from "react-router-dom";
import { Background } from "./Images";

const Home = ( ) => {
  return (
    <div className="background">
      <div className="background-overlay">
        <span className="background-text">Check Out Our New Candle Collection</span>
        <div>
          <Link to="/store">
            <button className="background-button">Shop now</button>
          </Link>
        </div>
      </div>
      <img src={Background} alt="Candles" className="background-image"></img>
    </div>
  );
}

export default Home;
