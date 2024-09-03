import React, { useState } from "react";
import Company from "../../../assets/company_logo.svg";
import "./SecondaryButton.scss";

interface ISecondaryButton {
  companyName: string;
  onClick: (selectedCompany: any) => void;
  isActive?: boolean;
}

const SecondaryButton = ({
  companyName,
  onClick,
  isActive = false,
}: ISecondaryButton) => {
  return (
    <div
      className={`secondaryButton ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <i className="secondaryButton-icon">
        <img src={Company} alt="Logo" />
      </i>
      {companyName} Unit
    </div>
  );
};

export default SecondaryButton;
