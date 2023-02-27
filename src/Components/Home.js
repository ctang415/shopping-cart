import React from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "./Images";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="background-overlay">
        <span className="background-text">Check Out Our New Candle Collection</span>
        <div><button onClick={() => navigate('/store')} className="background-button">Shop now</button></div>
      </div>
      <img src={Background} alt="Candles" className="background-image"></img>
    </div>
  );
}

export default Home;
