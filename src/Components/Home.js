import React from "react";
import { Background } from "./Images";

const Home = ( {clickHandler} ) => {
  return (
    <div className="background">
      <div className="background-overlay">
        <span className="background-text">Check Out Our New Candle Collection</span>
        <div>
          <button onClick={clickHandler} className="background-button">Shop now</button>
        </div>
      </div>
      <img src={Background} alt="Candles" className="background-image"></img>
    </div>
  );
}

export default Home;
