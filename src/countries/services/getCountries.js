import { countryApi } from "../../api/countryApi";

export const getCountries = async (query) => {
  const { data } = await countryApi.get(query);
  return data;
};
