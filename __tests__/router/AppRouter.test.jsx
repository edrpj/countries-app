import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useFetchCountries } from "../../src/countries/hooks/useFetchCountries";
import { useThemeMode } from "../../src/countries/hooks/useThemeMode";
import { AppRouter } from "../../src/router/AppRouter";
import { themeType } from "../../src/theme/themeType";
import { countriesInfo } from "../dataForTesting/countriesInfo";

jest.mock("../../src/countries/hooks/useThemeMode");
jest.mock("../../src/countries/hooks/useFetchCountries");

describe("Testing <AppRouter />", () => {
  const useThemeModeData = {
    bgColorElements: "bg-white",
    textColor: "text-very-dark-blue",
    onChangeTheme: jest.fn(),
    theme: themeType.light,
  };
  useThemeMode.mockReturnValue(useThemeModeData);
  useFetchCountries.mockReturnValue({
    countries: countriesInfo,
    isLoading: false,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the Navbar Component", () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText("Where in the world?")).toBeTruthy();
    expect(screen.getByText("Dark Mode")).toBeTruthy();
  });

  it('should render the searchPage when the route is "/countries"', () => {
    render(
      <MemoryRouter initialEntries={["/countries"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("search").placeholder).toBe(
      "Search for a country..."
    );
  });

  it('should render the countryPage when the route is "/country/BEL"', () => {
    render(
      <MemoryRouter initialEntries={["/country/BEL"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText("Back")).toBeTruthy();
    expect(screen.getByText("Belgium")).toBeTruthy();
  });
});
