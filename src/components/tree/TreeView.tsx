import { ITreeData } from "../../types/tree";
import TreeNode from "./TreeNode";
import "./TreeView.scss";

interface ITreeView {
  data: ITreeData[];
}

const TreeView = ({ data }: ITreeView) => {
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
