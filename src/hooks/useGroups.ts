import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  retrieveAssetsByCompanyId,
  retrieveLocationsByCompanyId,
} from "../api/companiesAPI";
import { assetsType, locationType } from "../types/companies";
import { IState } from "../redux/reducers/companyReducer";

export const useGroups = () => {
  const selectedCompany = useSelector((state: IState) => state.selectedCompany);
  const [locations, setLocations] = useState<locationType[]>([]);
  const [assets, setAssets] = useState<assetsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocationAndAssets = async () => {
      try {
        if (selectedCompany !== "") {
          const locationsData = await retrieveLocationsByCompanyId(
            selectedCompany
          );
          const assetsData = await retrieveAssetsByCompanyId(selectedCompany);
          setLocations(locationsData);
          setAssets(assetsData);
        }
      } catch (err) {
        setError("Failed to retrieve locations");
      } finally {
        setLoading(false);
      }
    };

    fetchLocationAndAssets();
  }, [selectedCompany]);

  return { locations, assets, loading, error };
};
