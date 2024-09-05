import React from "react";
import Motor from "../../assets/Motor3.png";
import Divider from "../divider/Divider";
import { getFirstLetter } from "../../util/generalUtil";
import "./ProductDetails.scss";
import InfoItem from "../infoItem/InfoItem";

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
        <InfoItem
          label="Tipo de Equipamento"
          value="Motor Elétrico (Trifásico)"
          alt="Sensor"
        />

        <Divider />

        <div className="textInfo">
          <h4>Responsáveis</h4>
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
