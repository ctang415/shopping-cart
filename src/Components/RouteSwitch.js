import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
