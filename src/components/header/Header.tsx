import React from "react";
import Logo from "../../assets/logo_tractian.svg";
import CompaniesList from "../companiesList/CompaniesList";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Tractian Logo" />
      <CompaniesList />
    </header>
  );
};

export default Header;
