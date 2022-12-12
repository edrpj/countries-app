import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CountriesList } from "../../../src/countries/components/CountriesList";
import { useFetchCountries } from "../../../src/countries/hooks/useFetchCountries";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { countriesInfo } from "../../dataForTesting/countriesInfo";

jest.mock("../../../src/countries/hooks/useThemeMode");
jest.mock("../../../src/countries/hooks/useFetchCountries");

describe("Testing <CountriesList />", () => {
  const useThemeModeData = {
    bgColorElements: "bg-white",
    textColor: "text-very-dark-blue",
  };
  useThemeMode.mockReturnValue(useThemeModeData);

  it("should render the Loading Component when isLoading is true", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      isLoading: true,
    });

    render(<CountriesList />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("should render the countries cards when isLoading is false", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <CountriesList />
      </MemoryRouter>
    );

    expect(screen.getByText("Belgium")).toBeTruthy();
    expect(screen.getByText("Colombia")).toBeTruthy();
  });
});
