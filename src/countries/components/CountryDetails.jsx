import { getCurrencyName } from "../helpers/getCurrencyName";
import { getLanguagesOfACountry } from "../helpers/getLanguagesOfACountry";
import { internationalNumberFormat } from "../helpers/internationalNumberFormat";

export const CountryDetails = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  textColor,
}) => {
  return (
    <div className="row ms-0">
      <div className="row h-25 m-0 p-0">
        <div className="col ps-0 ps-lg-5 pt-4">
          <h2 className={`${textColor} font-extrabold`}>{name}</h2>
        </div>
      </div>

      <div className="row h-75 m-0 p-0 pt-3">
        <div className="col-12 col-sm-6 ps-0 ps-lg-5">
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Native Name: </span>{" "}
            {nativeName ?? name}
          </p>
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Population: </span>{" "}
            {internationalNumberFormat.format(population)}
          </p>
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Region: </span> {region}
          </p>
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Sub Region: </span>{" "}
            {subregion}
          </p>
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Capital: </span> {capital}
          </p>
        </div>

        <div className="col-12 col-sm-6 ps-0 ps-sm-4 ps-md-2 mt-4 mt-sm-0">
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Top Level Domain: </span>{" "}
            {topLevelDomain}
          </p>
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Currencies: </span>{" "}
            {getCurrencyName(currencies)}
          </p>
          <p aria-label="paragraph" className={`${textColor} mb-2`}>
            <span className="text-base font-semibold">Languages: </span>{" "}
            {getLanguagesOfACountry(languages)}
          </p>
        </div>
      </div>
    </div>
  );
};
