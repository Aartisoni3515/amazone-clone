import React, { useContext, useState } from "react";
import mobile3 from "../../amazon-image/mobile3.jpg";
import { CartContext } from "../CartContext";
import "./Checkout.css";

const CheckoutItems = (props) => {
  const removeCart=()=>{
    
  }
 
  
 


  return (
    <div>
      <div>
        <div
          style={{
            border: "1px solid #E7E7E7",
            width: "95%",
            display: "flex",
            height: "250px",
            margin: "25px",
          }}
        >
          <div style={{ margin: "25px" }}>
            <img height="200px" src={mobile3} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ fontSize: "20px" }} className="textgap">
              {" "}
              New Apple iphone 12 (64GB)-Gold{" "}
            </div>
            <div style={{ fontWeight: "bold" }} className="textgap">
              {" "}
              70,000{" "}
            </div>
            <div className="textgap">In Stock</div>
            <button className="placeorder__button" onClick={removeCart} >Remove form Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
