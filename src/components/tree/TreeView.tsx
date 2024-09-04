import { ILocation, IAsset, IComponent } from "../../types/tree";
import TreeNode from "./TreeNode";
import "./TreeView.scss";

const TreeView: React.FC<{ data: (ILocation | IAsset | IComponent)[] }> = ({
  data,
}) => {
  return (
    <div className="treeView">
      <ul>
        {data.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </ul>
    </div>
  );
};

export default TreeView;
