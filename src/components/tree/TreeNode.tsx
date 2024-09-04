import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Down from "../../assets/down.svg";
import LocationIcon from "../../assets/location.svg";
import AssetIcon from "../../assets/asset.svg";
import ComponetIcon from "../../assets/component.png";
import { hasLength } from "../../util/arrayUtil";
import { IAsset, ILocation, IComponent } from "../../types/tree";
import { setComponentData } from "../../redux/actions/companyAction";
import { IState } from "../../redux/reducers/companyReducer";

interface TreeNodeProps {
  node: ILocation | IAsset | IComponent;
}

const componentsByType = {
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
      <img src={ComponetIcon} alt="Componet Icon" />
    </i>
  ),
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const dispatch = useDispatch<any>();
  const [isExpanded, setIsExpanded] = useState(true);
  const selectedComponent = useSelector(
    (state: IState) => state.selectedComponent
  );

  const onNodeClick = () => {
    if (node.type === "component") {
      dispatch(setComponentData(node as IComponent));
      return;
    }
    setIsExpanded(!isExpanded);
  };

  console.log(selectedComponent?.id);

  return (
    <li className={selectedComponent?.id === node.id ? "active" : ""}>
      <div className="treeView-icons" onClick={onNodeClick}>
        {hasLength(node.children) && (
          <i className={!isExpanded ? "expand" : ""}>
            <img src={Down} alt={isExpanded ? "Collapse" : "Expand"} />
          </i>
        )}
        {componentsByType[node.type || "component"]}
        {node.name}
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
