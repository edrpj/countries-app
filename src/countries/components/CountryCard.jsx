import { useNavigate } from "react-router-dom";
import { internationalNumberFormat } from "../helpers/internationalNumberFormat";

import { useThemeMode } from "../hooks/useThemeMode";

export const CountryCard = ({
  id,
  name,
  capital,
  population,
  region,
  imgUrl,
}) => {
  const navigate = useNavigate();
  const { bgColorElements, textColor } = useThemeMode();

  const onNavigateToACard = () => {
    navigate(`/country/${id}`);
  };

  return (
    <div className="col">
      <div
        aria-label="card"
        className={`card shadow cursor-pointer ${bgColorElements}`}
        onClick={onNavigateToACard}
      >
        <img
          src={imgUrl}
          className="card-img-top w-100 object-cover h-img-card"
          alt={name}
        />

        <div aria-label="information" className={`card-body ${textColor}`}>
          <h5 className="card-title text-base font-extrabold mb-3">{name}</h5>
          <p className="card-text mb-0">
            <span className="text-sm font-extrabold">Population: </span>{" "}
            {internationalNumberFormat.format(population)}
          </p>
          <p className="card-text mb-0">
            <span className="text-sm font-extrabold">Region: </span> {region}
          </p>
          <p className="card-text mb-3">
            <span className="text-sm font-extrabold">Capital: </span> {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
