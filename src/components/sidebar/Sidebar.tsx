import React, { useState } from "react";
import TextField from "../textField/TextField";
import { useGroups } from "../../hooks/useGroups";
import TreeView from "../tree/TreeView";
import { buildTree, filterTree } from "../../util/treeUtils";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const { locations, assets } = useGroups();
  const [searchText, setSearchText] = useState("");
  const treeData = buildTree(locations, assets);
  const filteredTreeData = filterTree(treeData, searchText);

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
