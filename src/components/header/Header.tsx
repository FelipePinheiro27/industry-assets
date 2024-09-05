import React from "react";
import Logo from "../../assets/logo_tractian.svg";
import CompaniesList from "../companiesList/CompaniesList";
import { useIsMobileView } from "../../hooks/useIsMobileView";
import "./Header.scss";

const Header = () => {
  const isMobile = useIsMobileView();

  if (isMobile) {
    return (
      <header className="headerMobile">
        <img className="headerMobile-logo" src={Logo} alt="Tractian Logo" />
        <CompaniesList />
      </header>
    );
  }

  return (
    <header className="header">
      <img src={Logo} alt="Tractian Logo" />
      <CompaniesList />
    </header>
  );
};

export default Header;
