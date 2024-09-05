import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SecondaryButton from "../button/secondaryButton/SecondaryButton";
import { retrieveAllCompanies } from "../../api/companiesAPI";
import { companyType } from "../../types/companies";
import { hasLength } from "../../util/arrayUtil";
import { IState } from "../../redux/reducers/companyReducer";
import {
  setComponentData,
  setSelectedCompany,
} from "../../redux/actions/companyAction";

const CompaniesList = () => {
  const dispatch = useDispatch<any>();
  const [companies, setCompanies] = useState<companyType[]>([]);
  const selectedCompany = useSelector((state: IState) => state.selectedCompany);

  const fillInitialActiveCompany = useCallback(
    (companiesFethed: companyType[]) => {
      if (selectedCompany.id === "" && hasLength(companiesFethed)) {
        dispatch(
          setSelectedCompany({
            id: companiesFethed[0].id,
            name: companiesFethed[0].name,
          })
        );
      }
    },
    [dispatch, selectedCompany]
  );

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await retrieveAllCompanies();
      fillInitialActiveCompany(data);
      setCompanies(data);
    };

    fetchCompanies();
  }, [fillInitialActiveCompany]);

  const onCompanyClick = (selectedCompany: companyType) => {
    dispatch(
      setSelectedCompany({
        id: selectedCompany.id,
        name: selectedCompany.name,
      })
    );
  };

  return (
    <div className="header__buttons">
      {companies.map((company) => {
        return (
          <SecondaryButton
            key={company.id}
            companyName={company.name}
            onClick={() => onCompanyClick(company)}
            isActive={company.id === selectedCompany.id}
          />
        );
      })}
    </div>
  );
};

export default CompaniesList;
