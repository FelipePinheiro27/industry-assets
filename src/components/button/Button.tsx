import React, { useState } from "react";
import Bolt from "../../assets/bolt_2.svg";
import "./Button.scss";

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`button ${isActive ? "active" : ""}`} onClick={handleClick}>
      <i className="button-icon">
        <img src={Bolt} alt="Bolt Image" />
      </i>
      Sensor de Energia
    </div>
  );
};

export default Button;
