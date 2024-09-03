import { COMPANY_SELECTED } from "../actions/actionTypes";

export interface IState {
  selectedCompany: string;
}

const initialState: IState = {
  selectedCompany: "",
};

export const setSelectedCompany = (state: IState, action: any) => {
  const { companySelected } = action;

  return {
    ...state,
    selectedCompany: companySelected,
  };
};

const reducer = (state = initialState, action: any): IState => {
  switch (action.type) {
    case COMPANY_SELECTED:
      return setSelectedCompany(state, action);
    default:
      return state;
  }
};

export default reducer;
