import React from "react";
import Motor from "../../assets/Motor3.png";
import Divider from "../divider/Divider";
import TextInfo from "../textInfo/TextInfo";
import "./ProductDetails.scss";

const ProductDetails = () => {
  return (
    <div className="productDetails">
      <div className="productDetails-imageContent">
        <img src={Motor} alt="Product Image" />
      </div>
      <div className="productDetails__info">
        <TextInfo />
        <Divider />
        <TextInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
