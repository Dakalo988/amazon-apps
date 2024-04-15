import React from "react";
import "./Home.css";
import Products from "../Product/Products";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://m.media-amazon.com/images/I/71KfZkbgStL._SX3000_.jpg"
            alt="Hero img"
          />
          <Products />
        </div>
      </div>
    </div>
  );
};
export default Home;
