import { IComponent } from "../../types/tree";
import { SET_COMPANY, SET_COMPONENT_DATA } from "./actionTypes";

export const setSelectedCompany = (companyId: string) => (dispatch: any) => {
  dispatch({
    type: SET_COMPANY,
    companySelected: companyId,
  });
};

export const setComponentData =
  (componentData: IComponent) => (dispatch: any) => {
    dispatch({
      type: SET_COMPONENT_DATA,
      selectedComponent: componentData,
    });
  };
