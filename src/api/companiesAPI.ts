import axios from "axios";
import { assetsType, companyType, locationType } from "../types/companies";

const baseUrl = "https://fake-api.tractian.com";

export const retrieveAllCompanies = async () => {
  try {
    const url = `${baseUrl}/companies`;
    const response = await axios.get<companyType[]>(url);
    return response.data;
  } catch (error) {
    console.error("Error retrieving companies:", error);
    throw error;
  }
};

export const retrieveLocationsByCompanyId = async (companyId: string) => {
  try {
    const url = `${baseUrl}/companies/${companyId}/locations`;
    const response = await axios.get<locationType[]>(url);
    return response.data;
  } catch (error) {
    console.error("Error retrieving locations company:", error);
    throw error;
  }
};

export const retrieveAssetsByCompanyId = async (companyId: string) => {
  try {
    const url = `${baseUrl}/companies/${companyId}/assets`;
    const response = await axios.get<assetsType[]>(url);
    return response.data;
  } catch (error) {
    console.error("Error retrieving assets company:", error);
    throw error;
  }
};
