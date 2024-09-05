import React from "react";
import SearchIcon from "../../assets/lupa.svg";
import "./TextField.scss";

interface ITextField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ value, onChange }: ITextField) => {
  return (
    <div className="textField">
      <input
        type="text"
        value={value}
        onChange={onChange}
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
