import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CountryCard } from "../../../src/countries/components/CountryCard";
import { internationalNumberFormat } from "../../../src/countries/helpers/internationalNumberFormat";
import { useFetchCountries } from "../../../src/countries/hooks/useFetchCountries";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { CountryPage } from "../../../src/countries/pages/CountryPage";
import { countriesInfo } from "../../dataForTesting/countriesInfo";
import { countryInfo } from "../../dataForTesting/countryInfo";

jest.mock("../../../src/countries/hooks/useFetchCountries");
jest.mock("../../../src/countries/hooks/useThemeMode");

describe("Testing <CountryPage />", () => {
  const useThemeModeData = {
    bgColorContainer: "bg-white",
    textColor: "text-very-dark-blue",
    bgColorBtn: "btn-white",
    isLight: true,
  };
  useThemeMode.mockReturnValue(useThemeModeData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the Loading Component when isLoading is true", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      isLoading: true,
    });

    render(
      <MemoryRouter>
        <CountryPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("should render the country information when isLoading is false", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <CountryPage />
      </MemoryRouter>
    );

    const { name, population, region, subregion, tld } = countriesInfo[0];

    expect(screen.getByText(name.common)).toBeTruthy();
    expect(
      screen.getByText(internationalNumberFormat.format(population))
    ).toBeTruthy();
    expect(screen.getByText(region)).toBeTruthy();
    expect(screen.getByText(subregion)).toBeTruthy();
    expect(screen.getByText(tld[0])).toBeTruthy();
    expect(screen.getByText("German, French, Dutch")).toBeTruthy();
    expect(screen.getByText("Euro")).toBeTruthy();
  });

  it("should go back to the previous page when the back button is clicked", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    const { cca3, name, capital, population, region, flags } = countryInfo;

    render(
      <MemoryRouter initialEntries={["/countries"]}>
        <Routes>
          <Route
            path="countries"
            element={
              <CountryCard
                id={cca3}
                name={name.common}
                capital={capital[0]}
                population={population}
                region={region}
                imgUrl={flags.svg}
              />
            }
          />
          <Route path="/country/BEL" element={<CountryPage />} />
        </Routes>
      </MemoryRouter>
    );

    const cardDiv = screen.getByLabelText("card");
    fireEvent.click(cardDiv);

    const backBtn = screen.getByText("Back");
    fireEvent.click(backBtn);

    expect(screen.getByLabelText("card").className).toContain("card");
    expect(screen.getByLabelText("information").className).toContain(
      "card-body"
    );
  });

  it("should navigate to a border country", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    const countryName = "France";

    render(
      <MemoryRouter initialEntries={["/country/BEL"]}>
        <Routes>
          <Route path="country/BEL" element={<CountryPage />} />
          <Route path="/country/FRA" element={<h1>{countryName}</h1>} />
        </Routes>
      </MemoryRouter>
    );

    const franceCountryBtn = screen.getByLabelText("FRA");
    fireEvent.click(franceCountryBtn);

    expect(screen.getByText(countryName)).toBeTruthy();
  });
});
