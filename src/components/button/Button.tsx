import React, { useState } from "react";
import Bolt from "../../assets/bolt_2.svg";
import "./Button.scss";

interface IButton {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  isActive?: boolean;
}

const Button = ({ children, onClick, label, isActive }: IButton) => {
  return (
    <div className={`button ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
      {label}
    </div>
  );
};

export default Button;
