import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ProductView from "../productView/ProductPreview";
import AssetsHeader from "../assetsHeader/AssetsHeader";
import "./AssetsContent.scss";

const AssetsContent = () => {
  return (
    <div className="assetsContent">
      <AssetsHeader />
      <div className="assetsContent__boxes">
        <Sidebar />
        <ProductView />
      </div>
    </div>
  );
};

export default AssetsContent;
