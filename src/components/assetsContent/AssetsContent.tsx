import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ProductView from "../productView/ProductPreview";
import AssetsHeader from "../assetsHeader/AssetsHeader";
import "./AssetsContent.scss";

const AssetsContent = () => {
  return (
    <body className="assetsContent">
      <AssetsHeader />
      <Sidebar />
      <ProductView />
    </body>
  );
};

export default AssetsContent;
