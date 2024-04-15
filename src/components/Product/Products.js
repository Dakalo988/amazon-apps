import React from "react";
import Product from "../Product/Product";
import "./Product.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          key="1"
          id="1"
          title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac,
       PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
          image="https://m.media-amazon.com/images/I/41UY0i5ygQL._AC_SY741_.jpg"
          rating={4}
          price="59"
        />
        <Product
          id="2"
          title="16GB DDR4 3200MHz PC4-25600 CL22 SODIMM 1.2V 260-Pin Non-ECC SODIMM Laptop Notebook RAM Memory Modul"
          image="https://m.media-amazon.com/images/I/51WbPcPCM2L._AC_UL480_FMwebp_QL65_.jpg"
          rating={3}
          price="30.99"
        />
      </div>
      <div className="products_row">
        <Product
          id="3"
          title="HDMI Switch 4k@60hz Splitter, GANA Aluminum Bidirectional HDMI Switcher 2 in 1 Out, Manual HDMI Hub Supports HD Compatible with Xbox PS5/4/3 Blu-Ray Player Fire Stick Roku"
          image="https://m.media-amazon.com/images/I/71H1hhxDWgL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          price="5.99"
        />
        <Product
          id="4"
          title="INNOCN 34M1R 34 Mini LED Curved Ultrawide Gaming Monitor 3440 x 1440p 165Hz PC Computer Gaming Monitor, USB Type C Power Delivery, HDMI, DP, Stereo Speakers, Charger Pad, Black"
          image="https://m.media-amazon.com/images/I/71ldzAjcBcL._AC_SX679_.jpg"
          rating={6}
          price="90.99"
        />
        <Product
          id="5"
          title="Sound Bar, Sound Bars for TV, Soundbar, Surround Sound System Home Theater Audio with Wireless Bluetooth 5.0 for PC Gaming, AUX/Opt/Coax Connection, Remote Control Wall Mountable"
          image="https://m.media-amazon.com/images/I/71USRYbDOdL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          rating={5}
          price="200"
        />
      </div>
    </>
  );
};

export default Products;
