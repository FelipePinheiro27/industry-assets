import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Down from "../../assets/down.svg";
import LocationIcon from "../../assets/location.svg";
import AssetIcon from "../../assets/asset.svg";
import ComponetIcon from "../../assets/component.png";
import BoltIcon from "../../assets/bolt.svg";
import BoltIconRed from "../../assets/bolt_red.svg";
import { hasLength } from "../../util/arrayUtil";
import { ITreeData } from "../../types/tree";
import { setComponentData } from "../../redux/actions/companyAction";
import { IState } from "../../redux/reducers/companyReducer";
import { riskColor } from "../../constants/generalConstant";

interface TreeNodeProps {
  node: ITreeData;
}

const boltColor = {
  operating: (
    <i>
      <img src={BoltIcon} alt={"Bolt"} />
    </i>
  ),
  alert: (
    <i>
      <img src={BoltIconRed} alt={"Bolt Red"} />
    </i>
  ),
};

const iconsByType = {
  location: (
    <i>
      <img src={LocationIcon} alt="Location Icon" />
    </i>
  ),
  asset: (
    <i>
      <img src={AssetIcon} alt="Asset Icon" />
    </i>
  ),
  component: (
    <i>
      <img src={ComponetIcon} alt="Component Icon" />
    </i>
  ),
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const dispatch = useDispatch<any>();
  const [isExpanded, setIsExpanded] = useState(true);
  const isComponent = node.type === "component";
  const selectedComponent = useSelector(
    (state: IState) => state.selectedComponent
  );

  const onNodeClick = () => {
    if (node.type === "component") {
      dispatch(setComponentData(node));
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const isEnergy = useMemo(() => {
    if (isComponent) {
      return node?.sensorType === "energy";
    }
  }, [isComponent, node]);

  return (
    <li className={selectedComponent?.id === node.id ? "active" : ""}>
      <div className="treeView-icons" onClick={onNodeClick}>
        {hasLength(node.children) && (
          <i className={!isExpanded ? "expand" : ""}>
            <img src={Down} alt={isExpanded ? "Collapse" : "Expand"} />
          </i>
        )}
        {iconsByType[node.type || "component"]}
        {node.name}
        {isEnergy ? (
          boltColor[node.status!]
        ) : (
          <div
            style={{ backgroundColor: riskColor[node.status!] }}
            className="circle-risk"
          />
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
