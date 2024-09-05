import React from "react";
import BoltIcon from "../../assets/bolt.svg";
import BoltIconRed from "../../assets/bolt_red.svg";

interface IBoltStatusIcon {
  status?: "operating" | "alert" | null;
}

const icons = {
  operating: <img src={BoltIcon} alt="Bolt" />,
  alert: <img src={BoltIconRed} alt="Bolt Red" />,
};

const BoltStatusIcon = ({ status }: IBoltStatusIcon) => {
  if (!status) return <></>;

  return <i>{icons[status]}</i>;
};

export default BoltStatusIcon;
