import { riskColor } from "../../constants/generalConstant";

interface IRiskStatusIndicator {
  status?: "operating" | "alert" | null;
}

const RiskStatusIndicator = ({ status }: IRiskStatusIndicator) => {
  if (!status) return <></>;

  return (
    <div
      style={{ backgroundColor: riskColor[status] }}
      className="circle-risk"
    />
  );
};

export default RiskStatusIndicator;
