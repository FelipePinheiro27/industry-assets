import React from "react";
import TextField from "../textField/TextField";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <TextField />
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
