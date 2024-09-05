import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../redux/reducers/companyReducer";
import ProductDetails from "../productDetails/ProductDetails";
import SensorIcon from "../../assets/sensor_icon.svg";
import ReceptorIcon from "../../assets/receptor.svg";
import Divider from "../divider/Divider";
import BoltStatusIcon from "./BoltStatusIcon";
import InfoItem from "../infoItem/InfoItem";
import RiskStatusIndicator from "../riskStatusIndicator/RiskStatusIndicator";
import "./ProductView.scss";

const ProductView = () => {
  const selectedComponent = useSelector(
    (state: IState) => state.selectedComponent
  );

  const { sensorId, gatewayId, status, sensorType } = selectedComponent || {};

  const isEnergy = sensorType === "energy";
  const responsible = isEnergy ? "Elétrica" : "Mecânica";

  if (selectedComponent === null) return <>No data</>;

  return (
    <div className="productView">
      <div className="productView__productTitle">
        <h3>{selectedComponent?.name}</h3>
        {isEnergy ? (
          <BoltStatusIcon status={status} />
        ) : (
          <RiskStatusIndicator status={status} />
        )}
      </div>
      <div className="productView__content">
        <ProductDetails responsible={responsible} />
        <Divider />
        <div className="productView__content-more">
          <InfoItem
            label="Sensor"
            value={sensorId}
            icon={SensorIcon}
            alt="Sensor"
          />
          <InfoItem
            label="Gateway"
            value={gatewayId}
            icon={ReceptorIcon}
            alt="Receptor"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
