import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownIcon from "../../assets/down.svg";
import LocationIcon from "../../assets/location.svg";
import AssetIcon from "../../assets/asset.svg";
import ComponentIcon from "../../assets/component.png";
import { hasLength } from "../../util/arrayUtil";
import { ITreeData } from "../../types/tree";
import { setComponentData } from "../../redux/actions/companyAction";
import { IState } from "../../redux/reducers/companyReducer";
import BoltStatusIcon from "../productView/BoltStatusIcon";
import RiskStatusIndicator from "../riskStatusIndicator/RiskStatusIndicator";

interface TreeNodeProps {
  node: ITreeData;
}

const iconsByType = {
  location: <img src={LocationIcon} alt="Location Icon" />,
  asset: <img src={AssetIcon} alt="Asset Icon" />,
  component: <img src={ComponentIcon} alt="Component Icon" />,
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const dispatch = useDispatch<any>();
  const [isExpanded, setIsExpanded] = useState(true);
  const selectedComponent = useSelector(
    (state: IState) => state.selectedComponent
  );

  const isEnergy = useMemo(
    () => node.type === "component" && node.sensorType === "energy",
    [node]
  );

  const handleNodeClick = () => {
    if (node.type === "component") {
      dispatch(setComponentData(node));
    } else {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <li className={selectedComponent?.id === node.id ? "active" : ""}>
      <div className="treeView-icons" onClick={handleNodeClick}>
        {hasLength(node.children) && (
          <i className={isExpanded ? "" : "expand"}>
            <img src={DownIcon} alt={isExpanded ? "Collapse" : "Expand"} />
          </i>
        )}
        <i>{iconsByType[node.type || "component"]}</i>
        {node.name}
        {isEnergy ? (
          <BoltStatusIcon status={node.status} />
        ) : (
          <RiskStatusIndicator status={node.status} />
        )}
      </div>
      {isExpanded && node.children && node.children.length > 0 && (
        <ul>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
