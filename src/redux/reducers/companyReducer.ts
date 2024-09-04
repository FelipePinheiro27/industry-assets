import { IComponent } from "../../types/tree";
import { SET_COMPANY, SET_COMPONENT_DATA } from "../actions/actionTypes";

export interface IState {
  selectedCompany: string;
  selectedComponent: IComponent | null;
}

const initialState: IState = {
  selectedCompany: "",
  selectedComponent: null,
};

const setSelectedCompany = (state: IState, action: any) => {
  const { companySelected } = action;

  return {
    ...state,
    selectedCompany: companySelected,
  };
};

const setComponentData = (state: IState, action: any) => {
  const { selectedComponent } = action;

  return {
    ...state,
    selectedComponent,
  };
};

const reducer = (state = initialState, action: any): IState => {
  switch (action.type) {
    case SET_COMPANY:
      return setSelectedCompany(state, action);
    case SET_COMPONENT_DATA:
      return setComponentData(state, action);
    default:
      return state;
  }
};

export default reducer;
