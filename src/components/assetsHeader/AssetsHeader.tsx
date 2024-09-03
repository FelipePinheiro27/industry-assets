import React from "react";
import Button from "../button/Button";
import "./AssetsHeader.scss";

const AssetsHeader = () => {
  return (
    <header className="assetsHeader">
      <div>
        <h3>Ativos</h3>
        <span> / Apex Unit</span>
      </div>
      <div className="assetsHeader-buttons">
        <Button />
        <Button />
      </div>
    </header>
  );
};

export default AssetsHeader;
