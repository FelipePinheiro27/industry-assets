import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import ProductView from "../productView/ProductPreview";
import AssetsHeader from "../assetsHeader/AssetsHeader";
import { FirlterType } from "../../types/filter";
import { useIsMobileView } from "../../hooks/useIsMobileView";
import "./AssetsContent.scss";

const AssetsContent = () => {
  const [filter, setFilter] = useState<FirlterType>("");
  const isMobile = useIsMobileView();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isMobile) {
    return (
      <div className="assetsContentMobile">
        <AssetsHeader
          isMobile={isMobile}
          filter={filter}
          setFilter={setFilter}
        />
        <button className="hamburgerToggle" onClick={toggleSidebar}>
          <div className="hamburgerIcon"></div>
          <div className="hamburgerIcon"></div>
          <div className="hamburgerIcon"></div>
        </button>
        <br />
        <br />
        <div>
          {isSidebarOpen ? <Sidebar filter={filter} /> : <ProductView />}
        </div>
      </div>
    );
  }

  return (
    <div className="assetsContent">
      <AssetsHeader isMobile={isMobile} filter={filter} setFilter={setFilter} />
      <div className="assetsContent__boxes">
        <Sidebar filter={filter} />
        <ProductView />
      </div>
    </div>
  );
};

export default AssetsContent;
