import { getLanguagesOfACountry } from "../../../src/countries/helpers/getLanguagesOfACountry";
import { countryInfo } from "../../dataForTesting/countryInfo";

describe("Testing getLanguagesOfACountry", () => {
  it("should return the languages of a country separated by commas", () => {
    const languages = getLanguagesOfACountry(countryInfo.languages);
    expect(languages).toBe("German, French, Dutch");
  });
});
