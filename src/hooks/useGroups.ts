import { useState, useEffect } from "react";
import { retrieveAllCompanies } from "../api/companiesAPI";
import { company } from "../types/companies";

export const useGroups = () => {
  const [companies, setCompanies] = useState<company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await retrieveAllCompanies();
        setCompanies(data);
      } catch (err) {
        setError("Failed to retrieve companies");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []); 

  return { companies, loading, error };
};
