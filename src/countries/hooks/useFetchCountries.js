import { useEffect, useState } from "react";
import { getCountries } from "../services/getCountries";

export const useFetchCountries = (query) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const countriesList = await getCountries(query);
      setCountries(countriesList);
      setIsLoading(false);
    } catch (error) {
      setCountries([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [query]);

  return {
    countries,
    isLoading,
  };
};
