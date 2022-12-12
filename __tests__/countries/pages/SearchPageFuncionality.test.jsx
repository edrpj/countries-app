import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useFetchCountries } from "../../../src/countries/hooks/useFetchCountries";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { SearchPage } from "../../../src/countries/pages/SearchPage";
import { countriesInfo } from "../../dataForTesting/countriesInfo";

jest.mock("../../../src/countries/hooks/useThemeMode");
jest.mock("../../../src/countries/hooks/useFetchCountries");
jest.mock("react-select", () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value
    );
    onChange(option);
  }
  return (
    <select aria-label="filter" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});
jest.mock("../../../src/countries/components/CountriesList", () => ({
  __esModule: true,
  CountriesList: ({ query }) => {
    return <h1>{query}</h1>;
  },
}));

describe("Testing <SearchPage /> Funcionalities", () => {
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

  it("should pass the '/all' query to the CountriesList Component via Props in the first render", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText("/all")).toBeTruthy();
  });

  it("should pass the search input value to the CountriesList Component via Props when the user type in the search input", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });
    const inputValue = "Colombia";

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const inputSearch = screen.getByLabelText("search");
    fireEvent.input(inputSearch, { target: { value: inputValue } });

    expect(screen.getByText(`/name/${inputValue}`)).toBeTruthy();
  });

  it("should pass the '/all' query to the CountriesList Component via Props when the user clear the input", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const inputSearch = screen.getByLabelText("search");
    fireEvent.input(inputSearch, { target: { value: "Colombia" } });
    fireEvent.input(inputSearch, { target: { value: "" } });

    expect(screen.getByText("/all")).toBeTruthy();
  });

  it("should pass the region to the CountriesList Component via Props when the user select the region in the filter component", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });
    const selectedValue = "europe";

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const filterSelect = screen.getByLabelText("filter");
    fireEvent.change(filterSelect, { target: { value: selectedValue } });

    expect(screen.getByText(`/region/${selectedValue}`)).toBeTruthy();
  });

  it("should pass the '/all' query to the CountriesList Component via Props when the user select the 'all' option in the filter component", () => {
    useFetchCountries.mockReturnValue({
      countries: countriesInfo,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const filterSelect = screen.getByLabelText("filter");
    fireEvent.change(filterSelect, { target: { value: "all" } });

    expect(screen.getByText("/all")).toBeTruthy();
  });
});
