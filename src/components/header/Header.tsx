import React from "react";
import Logo from "../../assets/logo_tractian.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Tractian Logo" />
    </header>
  );
};

export default Header;
