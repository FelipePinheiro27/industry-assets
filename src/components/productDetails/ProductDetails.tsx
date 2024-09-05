import React from "react";
import Motor from "../../assets/Motor3.png";
import Divider from "../divider/Divider";
import { getFirstLetter } from "../../util/generalUtil";
import "./ProductDetails.scss";

interface IProductDetails {
  responsible: string;
}

const ProductDetails = ({ responsible }: IProductDetails) => {
  return (
    <div className="productDetails">
      <div className="productDetails-imageContent">
        <img src={Motor} alt="Product" />
      </div>
      <div className="productDetails__info">
        <div className="textInfo">
          <h4>Tipo de Equipamento</h4>
          <span>Motor Elétrico (Trifásico)</span>
        </div>

        <Divider />

        <div className="textInfo">
          <h4>Responsáveis</h4>
          <div />
          <div className="textInfo-responsibleContent">
            <div className="textInfo-responsibleContent-circle">
              {getFirstLetter(responsible)}
            </div>
            <span>{responsible}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
