import React from "react";

interface IInfoItem {
  label: string;
  value?: string | null;
  icon?: string;
  alt: string;
}

const InfoItem = ({ label, value, icon, alt }: IInfoItem) => {
  if (!icon) {
    return (
      <div className="textInfo">
        <h4>{label}</h4>
        <span>{value || "N/A"}</span>
      </div>
    );
  }

  return (
    <div className="textInfo">
      <h4>{label}</h4>
      <i>
        <img src={icon} alt={alt} />
      </i>
      <span>{value || "N/A"}</span>
    </div>
  );
};

export default InfoItem;
