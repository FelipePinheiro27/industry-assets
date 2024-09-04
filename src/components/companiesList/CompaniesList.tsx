import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SecondaryButton from "../button/secondaryButton/SecondaryButton";
import { retrieveAllCompanies } from "../../api/companiesAPI";
import { companyType } from "../../types/companies";
import { hasLength } from "../../util/arrayUtil";
import { IState } from "../../redux/reducers/companyReducer";
import { setSelectedCompany } from "../../redux/actions/companyAction";

const CompaniesList = () => {
  const dispatch = useDispatch<any>();
  const [companies, setCompanies] = useState<companyType[]>([]);
  const selectedCompany = useSelector((state: IState) => state.selectedCompany);

  const fillInitialActiveCompany = useCallback(
    (companiesFethed: companyType[]) => {
      if (selectedCompany === "" && hasLength(companiesFethed)) {
        dispatch(setSelectedCompany(companiesFethed[0].id));
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
    dispatch(setSelectedCompany(selectedCompany.id));
  };

  return (
    <div className="header__buttons">
      {companies.map((company) => {
        return (
          <SecondaryButton
            key={company.id}
            companyName={company.name}
            onClick={() => onCompanyClick(company)}
            isActive={company.id === selectedCompany}
          />
        );
      })}
    </div>
  );
};

export default CompaniesList;
