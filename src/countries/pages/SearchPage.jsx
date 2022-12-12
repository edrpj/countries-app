import { useState } from "react";
import Select from "react-select";

import { CountriesList } from "../components/CountriesList";
import { regionOptions } from "../data/regions";
import { customSelectStyles } from "../helpers/customSelectStyles";
import { useThemeMode } from "../hooks/useThemeMode";

export const SearchPage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [query, setQuery] = useState("/all");
  const { bgColorContainer, bgColorElements, textInputColor, isLight } =
    useThemeMode();

  const onHandleSearch = ({ target }) => {
    const { value } = target;

    setSelectedValue("");

    if (value.trim() !== "") {
      setQuery(`/name/${value}`);
    } else {
      setQuery("/all");
    }
  };

  const onHandleFilter = (selectedOption) => {
    const { value } = selectedOption;

    setSelectedValue(selectedOption);

    if (value === "all") {
      setQuery("/all");
    } else {
      setQuery(`/region/${value}`);
    }
  };

  return (
    <div className={`w-100 h-100 m-0 pt-5 flex-1 ${bgColorContainer}`}>
      <div className={`container-fluid w-90 px-0 m-0-auto`}>
        <div className="row w-100 mx-0 px-0 mb-5">
          <div className={`col-12 col-lg-6 h-55-px px-0 ${bgColorContainer}`}>
            <div
              className={`d-flex w-100 w-xl-75 h-100 shadow bg-body rounded ${bgColorElements}`}
            >
              <i
                className={`fas fa-search d-flex align-items-center ms-4 ${textInputColor}`}
              ></i>
              <input
                type="text"
                aria-label="search"
                className={`w-100 no-border no-outline ps-3 font-semibold ${bgColorElements} ${textInputColor}`}
                placeholder="Search for a country..."
                onChange={onHandleSearch}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 px-0 mt-4 mt-lg-0 h-100 d-flex justify-content-end">
            <div className="w-100 w-lg-75">
              <Select
                aria-label="filter"
                options={regionOptions}
                onChange={onHandleFilter}
                styles={customSelectStyles(isLight)}
                value={selectedValue}
              />
            </div>
          </div>
        </div>

        <CountriesList query={query} />
      </div>
    </div>
  );
};
