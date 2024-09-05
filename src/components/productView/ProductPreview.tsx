import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../redux/reducers/companyReducer";
import ProductDetails from "../productDetails/ProductDetails";
import BoltIcon from "../../assets/bolt.svg";
import BoltIconRed from "../../assets/bolt_red.svg";
import SensorIcon from "../../assets/sensor_icon.svg";
import ReceptorIcon from "../../assets/receptor.svg";
import Divider from "../divider/Divider";
import { riskColor } from "../../constants/generalConstant";
import "./ProductView.scss";

const boltColor = {
  operating: (
    <i>
      <img src={BoltIcon} alt={"Bolt"} />
    </i>
  ),
  alert: (
    <i>
      <img src={BoltIconRed} alt={"Bolt Red"} />
    </i>
  ),
};

const ProductView = () => {
  const selectedComponent = useSelector(
    (state: IState) => state.selectedComponent
  );

  if (selectedComponent === null) return <>No data</>;

  const { sensorId, gatewayId, status, sensorType } = selectedComponent || {};

  const isEnergy = sensorType === "energy";
  const responsible = isEnergy ? "Elétrica" : "Mecânica";

  return (
    <div className="productView">
      <div className="productView__productTitle">
        <h3>{selectedComponent?.name}</h3>
        {isEnergy ? (
          boltColor[status || "operating"]
        ) : (
          <div
            style={{ backgroundColor: riskColor[status || "operating"] }}
            className="circle-risk"
          />
        )}
      </div>
      <div className="productView__content">
        <ProductDetails responsible={responsible} />
        <Divider />
        <div className="productView__content-more">
          <div className="textInfo">
            <h4>Sensor</h4>
            <i>
              <img src={SensorIcon} alt="Sensor" />
            </i>
            <span>{sensorId} </span>
          </div>
          <div className="textInfo">
            <h4>Gateway</h4>
            <i>
              <img src={ReceptorIcon} alt="Receptor" />
            </i>
            <span>{gatewayId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
