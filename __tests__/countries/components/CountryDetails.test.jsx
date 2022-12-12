import { render, screen } from "@testing-library/react";
import { CountryDetails } from "../../../src/countries/components/CountryDetails";
import { internationalNumberFormat } from "../../../src/countries/helpers/internationalNumberFormat";
import { countryInfo } from "../../dataForTesting/countryInfo";

describe("Testing <CountryDetails />", () => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = countryInfo;
  const textColor = "text-white";

  it("should render the information about the country", () => {
    render(
      <CountryDetails
        name={name.common}
        nativeName={name.nativeName.deu.official}
        population={population}
        region={region}
        subregion={subregion}
        capital={capital}
        topLevelDomain={tld[0]}
        currencies={currencies}
        languages={languages}
        textColor={textColor}
      />
    );

    expect(screen.getByText(name.common)).toBeTruthy();
    expect(screen.getByText(name.nativeName.deu.official)).toBeTruthy();
    expect(
      screen.getByText(internationalNumberFormat.format(population))
    ).toBeTruthy();
    expect(screen.getByText(region)).toBeTruthy();
    expect(screen.getByText(subregion)).toBeTruthy();
    expect(screen.getByText(capital)).toBeTruthy();
    expect(screen.getByText(tld[0])).toBeTruthy();
    expect(screen.getByText("Euro")).toBeTruthy();
    expect(screen.getByText("German, French, Dutch")).toBeTruthy();
  });

  it("should use the textColor css class in different html tags", () => {
    render(
      <CountryDetails
        name={name.common}
        nativeName={name.nativeName.deu.official}
        population={population}
        region={region}
        subregion={subregion}
        capital={capital}
        topLevelDomain={tld[0]}
        currencies={currencies}
        languages={languages}
        textColor={textColor}
      />
    );

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2.className).toContain(textColor);

    const paragraphs = screen.getAllByLabelText("paragraph");
    paragraphs.forEach((paragraph) => {
      expect(paragraph.className).toContain(textColor);
    });
  });

  it("should render the country name in the nativeName information if we do not send the nativeName via props", () => {
    render(
      <CountryDetails
        name={name.common}
        population={population}
        region={region}
        subregion={subregion}
        capital={capital}
        topLevelDomain={tld[0]}
        currencies={currencies}
        languages={languages}
        textColor={textColor}
      />
    );

    const paragraphs = screen.getAllByLabelText("paragraph");
    const nativeNameParagraph = paragraphs[0];

    expect(nativeNameParagraph.innerHTML).toContain("Native Name:");
    expect(nativeNameParagraph.innerHTML).toContain(name.common);
  });
});
