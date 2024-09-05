import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import Bolt from "../../assets/bolt_2.svg";
import Info from "../../assets/info.svg";
import { IState } from "../../redux/reducers/companyReducer";
import { FirlterType } from "../../types/filter";
import "./AssetsHeader.scss";

interface IAssetsHeader {
  isMobile: boolean;
  filter: FirlterType;
  setFilter: React.Dispatch<React.SetStateAction<FirlterType>>;
}

const AssetsHeader = ({ isMobile, filter, setFilter }: IAssetsHeader) => {
  const selectedCompany = useSelector((state: IState) => state.selectedCompany);

  const onClickEnergyFilter = () => {
    const isEnergyFilterActive = filter === "energy";
    if (isEnergyFilterActive) {
      setFilter("");

      return;
    }
    setFilter("energy");
  };

  const onClickCriticalFilter = () => {
    const isCriticalFilterActive = filter === "critical";
    if (isCriticalFilterActive) {
      setFilter("");

      return;
    }
    setFilter("critical");
  };

  return (
    <header className="assetsHeader">
      {!isMobile && (
        <div>
          <h3>Ativos</h3>
          <span> / {selectedCompany.name} Unit</span>
        </div>
      )}

      <div className="assetsHeader-buttons">
        <Button
          onClick={onClickEnergyFilter}
          isActive={filter === "energy"}
          label="Sensor de Energia"
        >
          <i className="button-icon">
            <img src={Bolt} alt="Bolt" />
          </i>
        </Button>

        <Button
          onClick={onClickCriticalFilter}
          isActive={filter === "critical"}
          label="Crítico"
        >
          <i className="button-icon">
            <img src={Info} alt="Crítico" />
          </i>
        </Button>
      </div>
    </header>
  );
};

export default AssetsHeader;
