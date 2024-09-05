import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import ProductView from "../productView/ProductPreview";
import AssetsHeader from "../assetsHeader/AssetsHeader";
import { FirlterType } from "../../types/filter";
import "./AssetsContent.scss";

const AssetsContent = () => {
  const [filter, setFilter] = useState<FirlterType>("");

  return (
    <div className="assetsContent">
      <AssetsHeader filter={filter} setFilter={setFilter} />
      <div className="assetsContent__boxes">
        <Sidebar filter={filter} />
        <ProductView />
      </div>
    </div>
  );
};

export default AssetsContent;
