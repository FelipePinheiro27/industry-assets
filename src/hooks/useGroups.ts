import { useState, useEffect, useCallback } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocationAndAssets = useCallback(async () => {
    if (!selectedCompany?.id) return;

    setLoading(true);
    setError(null);

    try {
      const [locationsData, assetsData] = await Promise.all([
        retrieveLocationsByCompanyId(selectedCompany.id),
        retrieveAssetsByCompanyId(selectedCompany.id),
      ]);

      setLocations(locationsData);
      setAssets(assetsData);
    } catch {
      setError("Failed to retrieve locations and assets");
    } finally {
      setLoading(false);
    }
  }, [selectedCompany]);

  useEffect(() => {
    fetchLocationAndAssets();
  }, [fetchLocationAndAssets]);

  return { locations, assets, loading, error };
};
