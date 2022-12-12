import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useFetchCountries } from "../../../src/countries/hooks/useFetchCountries";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { SearchPage } from "../../../src/countries/pages/SearchPage";
import { countriesInfo } from "../../dataForTesting/countriesInfo";

jest.mock("../../../src/countries/hooks/useThemeMode");
jest.mock("../../../src/countries/hooks/useFetchCountries");

describe("Testing <SearchPage /> UI", () => {
  const useThemeModeData = {
    bgColorContainer: "bg-white",
    bgColorElements: "bg-white",
    textInputColor: "text-very-dark-blue",
    isLight: true,
  };
  useThemeMode.mockReturnValue(useThemeModeData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the filter element and the search input with the correct placeholder and type", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      isLoading: true,
    });

    render(<SearchPage />);

    expect(screen.getByText("Select...")).toBeTruthy();
    expect(screen.getByLabelText("search").placeholder).toBe(
      "Search for a country..."
    );
    expect(screen.getByLabelText("search").type).toBe("text");
  });

  it("should render the Loading Component when isLoading is true", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      isLoading: true,
    });

    render(<SearchPage />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("should render the countries cards when isLoading is false", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getAllByLabelText("card").length).toBe(2);
    expect(screen.getAllByLabelText("information").length).toBe(2);
    expect(screen.getByText("Belgium")).toBeTruthy();
    expect(screen.getByText("Colombia")).toBeTruthy();
  });
});
