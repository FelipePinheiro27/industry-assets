import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SecondaryButton from "../button/secondaryButton/SecondaryButton";
import { retrieveAllCompanies } from "../../api/companiesAPI";
import { company } from "../../types/companies";
import { hasLength } from "../../util/arrayUtil";
import { IState } from "../../redux/reducers/companyReducer";
import { setSelectedCompany } from "../../redux/actions/companyAction";

const CompaniesList = () => {
  const dispatch = useDispatch<any>();
  const [companies, setCompanies] = useState<company[]>([]);
  const selectedCompany = useSelector((state: IState) => state.selectedCompany);

  const fillInitialActiveCompany = (companiesFethed: company[]) => {
    if (selectedCompany === "" && hasLength(companiesFethed)) {
      dispatch(setSelectedCompany(companiesFethed[0].id));
    }
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await retrieveAllCompanies();
      fillInitialActiveCompany(data);
      setCompanies(data);
    };

    fetchCompanies();
  }, []);

  const onCompanyClick = (selectedCompany: company) => {
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
