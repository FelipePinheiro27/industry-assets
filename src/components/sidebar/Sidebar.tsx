import React, { useState } from "react";
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
  const treeData = buildTree(
    parseLocationToTreeData(locations),
    parseAssetsToTreeData(assets)
  );
  const filteredTreeData = filterTree(treeData, searchText, filter);

  return (
    <div className="sidebar">
      <TextField
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="sidebar-nav">
        <TreeView data={filteredTreeData} />
      </div>
    </div>
  );
};

export default Sidebar;
