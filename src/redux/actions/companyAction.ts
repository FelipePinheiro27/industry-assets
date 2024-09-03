import { COMPANY_SELECTED } from "./actionTypes";

export const setSelectedCompany = (companyId: string) => (dispatch: any) => {
  dispatch({
    type: COMPANY_SELECTED,
    companySelected: companyId,
  });
};
