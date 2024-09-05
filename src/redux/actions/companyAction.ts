import { ITreeData } from "../../types/tree";
import { SET_COMPANY, SET_COMPONENT_DATA } from "./actionTypes";

export const setSelectedCompany =
  (value: { id: string; name: string }) => (dispatch: any) => {
    dispatch({
      type: SET_COMPANY,
      companySelected: value,
    });
  };

export const setComponentData =
  (componentData: ITreeData | null) => (dispatch: any) => {
    dispatch({
      type: SET_COMPONENT_DATA,
      selectedComponent: componentData,
    });
  };
