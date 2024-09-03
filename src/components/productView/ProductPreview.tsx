import React from "react";
import ProductDetails from "../productDetails/ProductDetails";
import Divider from "../divider/Divider";
import TextInfo from "../textInfo/TextInfo";
import "./ProductView.scss";

const ProductView = () => {
  return (
    <div className="productView">
      <div className="productView__productTitle">
        <h3>MOTORS H12D - Stage 3</h3>
      </div>
      <div className="productView__content">
        <ProductDetails />
        <Divider />
        <div className="productView__content-more">
          <div>
            <TextInfo />
          </div>
          <div>
            <TextInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
