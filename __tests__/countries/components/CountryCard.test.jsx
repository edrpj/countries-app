import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CountryCard } from "../../../src/countries/components/CountryCard";
import { internationalNumberFormat } from "../../../src/countries/helpers/internationalNumberFormat";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { countryInfo } from "../../dataForTesting/countryInfo";

jest.mock("../../../src/countries/hooks/useThemeMode");

describe("Testing <CountryCard />", () => {
  const { cca3, name, capital, population, region, flags } = countryInfo;

  const useThemeModeData = {
    bgColorElements: "bg-white",
    textColor: "text-very-dark-blue",
  };
  useThemeMode.mockReturnValue(useThemeModeData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the information of the card", () => {
    render(
      <MemoryRouter>
        <CountryCard
          id={cca3}
          name={name.common}
          capital={capital[0]}
          population={population}
          region={region}
          imgUrl={flags.svg}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(name.common)).toBeTruthy();
    expect(screen.getByText(capital[0])).toBeTruthy();
    expect(
      screen.getByText(internationalNumberFormat.format(population))
    ).toBeTruthy();
    expect(screen.getByText(region)).toBeTruthy();
  });

  it("should render the image of the card with the correct url and alt", () => {
    render(
      <MemoryRouter>
        <CountryCard
          id={cca3}
          name={name.common}
          capital={capital[0]}
          population={population}
          region={region}
          imgUrl={flags.svg}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("img").src).toBe(flags.svg);
    expect(screen.getByRole("img").alt).toBe(name.common);
  });

  it("should use the css classes provided by the useThemeMode hook", () => {
    render(
      <MemoryRouter>
        <CountryCard
          id={cca3}
          name={name.common}
          capital={capital[0]}
          population={population}
          region={region}
          imgUrl={flags.svg}
        />
      </MemoryRouter>
    );

    const cardDiv = screen.getByLabelText("card");
    const informationDiv = screen.getByLabelText("information");

    expect(cardDiv.className).toContain(useThemeModeData.bgColorElements);
    expect(informationDiv.className).toContain(useThemeModeData.textColor);
  });

  it("should navigate to the country page when the card is clicked", () => {
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
          <Route path="country/BEL" element={<h1>{name.common}</h1>} />
        </Routes>
      </MemoryRouter>
    );

    const cardDiv = screen.getByLabelText("card");
    fireEvent.click(cardDiv);

    expect(screen.getByText(name.common)).toBeTruthy();
  });
});
