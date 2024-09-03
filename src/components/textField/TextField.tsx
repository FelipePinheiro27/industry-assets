import React from "react";
import SearchIcon from "../../assets/lupa.svg";
import "./TextField.scss";

const TextField: React.FC = () => {
  return (
    <div className="textField">
      <input
        type="text"
        className="textField-input"
        placeholder="Buscar Ativo ou Local"
      />
      <i className="textField-icon">
        <img src={SearchIcon} alt="Search Icon" />
      </i>
    </div>
  );
};

export default TextField;
