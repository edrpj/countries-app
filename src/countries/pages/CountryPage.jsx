import { useNavigate, useParams } from "react-router-dom";

import { useThemeMode } from "../hooks/useThemeMode";
import { useFetchCountries } from "../hooks/useFetchCountries";
import { CountryDetails } from "../components/CountryDetails";
import { Loading } from "../components/Loading";

export const CountryPage = () => {
  const { bgColorContainer, textColor, bgColorBtn, isLight } = useThemeMode();
  const navigate = useNavigate();
  const { id } = useParams();

  const { countries, isLoading } = useFetchCountries(`/alpha/${id}`);
  const country = countries[0] ?? {};
  const {
    name,
    altSpellings,
    population,
    borders,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;
  const borderCountries = borders ?? ["No Countries"];

  const onNavigateToBorderCountry = (id) => {
    navigate(`/country/${id}`);
  };

  if (isLoading) return <Loading />;

  return (
    <div className={`w-100 h-100 m-0 pt-5 flex-1 ${bgColorContainer}`}>
      <div className={`container-fluid w-90 px-0 m-0-auto`}>
        <div className="row w-10 min-w-5 m-0 p-0">
          <button
            className={`btn ${bgColorBtn} shadow d-flex aling-items-center justify-content-center ${textColor}`}
            onClick={() => navigate(-1)}
          >
            <i className={`fa-solid fa-arrow-left font-semibold mt-1 me-3`}></i>
            Back
          </button>
        </div>

        <div className="row mt-5 mt-lg-6 w-100 mx-0 px-0">
          <div className="col-lg-5 col-sm-12 px-0 mx-0">
            <img
              src={country.flags.svg}
              className="w-100 p-0 m-0 h-100 object-cover"
              style={{ maxHeight: "40vh" }}
              alt={country.name.commom}
            />
          </div>

          <div className="col-lg-7 col-sm-12 px-0 ps-lg-5 py-lg-4">
            <CountryDetails
              name={name.common}
              nativeName={altSpellings[1]}
              population={population}
              region={region}
              subregion={subregion}
              capital={capital[0]}
              topLevelDomain={tld[0]}
              currencies={currencies}
              languages={languages}
              textColor={textColor}
            />

            <div className="row py-4 mx-0 ps-lg-5">
              <div className="col d-flex flex-column flex-sm-row align-items-sm-center p-0">
                <span
                  className={`${textColor} text-base font-semibold me-3 p-0`}
                >
                  Border Countries:{" "}
                </span>
                <div className="d-flex p-0 mt-3 mt-sm-0">
                  {borderCountries.map((borderCountry) => {
                    return (
                      <span
                        aria-label={borderCountry}
                        key={borderCountry}
                        className={`badge ${
                          isLight ? "bg-dark" : "bg-secondary"
                        } me-3 cursor-pointer`}
                        onClick={() => onNavigateToBorderCountry(borderCountry)}
                      >
                        {borderCountry}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
