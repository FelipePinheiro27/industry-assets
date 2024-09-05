import React, { useDeferredValue, useState } from "react";
import TextField from "../textField/TextField";
import { useGroups } from "../../hooks/useGroups";
import TreeView from "../tree/TreeView";
import {
  buildTree,
  filterTree,
  parseAssetsToTreeData,
  parseLocationToTreeData,
} from "../../util/treeUtils";
import { FirlterType } from "../../types/filter";
import "./Sidebar.scss";

interface ISidebar {
  filter: FirlterType;
}

const Sidebar = ({ filter }: ISidebar) => {
  const { locations, assets } = useGroups();
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const treeData = buildTree(
    parseLocationToTreeData(locations),
    parseAssetsToTreeData(assets)
  );

  const filteredTreeData = filterTree(treeData, deferredSearchText, filter);

  return (
    <div className="sidebar">
      <TextField value={searchText} onChange={handleSearchChange} />
      <div className="sidebar-nav">
        <TreeView data={filteredTreeData} />
      </div>
    </div>
  );
};

export default Sidebar;
