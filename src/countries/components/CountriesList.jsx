import { useFetchCountries } from "../hooks/useFetchCountries";
import { CountryCard } from "./CountryCard";
import { Loading } from "./Loading";

export const CountriesList = ({ query }) => {
  const { countries, isLoading } = useFetchCountries(query);

  if (isLoading) return <Loading />;

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5">
      {countries.map((country) => {
        const { cca3, name, population, region, capital, flags } = country;

        return (
          <CountryCard
            key={cca3}
            id={cca3}
            name={name.common}
            capital={capital}
            population={population}
            region={region}
            imgUrl={flags.svg}
          />
        );
      })}
    </div>
  );
};
