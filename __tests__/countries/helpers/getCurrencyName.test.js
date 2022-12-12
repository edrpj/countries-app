import { getCurrencyName } from "../../../src/countries/helpers/getCurrencyName";
import { countryInfo } from "../../dataForTesting/countryInfo";

describe("Testing getCurrencyName", () => {
  it("should return the currency name of the country", () => {
    const currencyName = getCurrencyName(countryInfo.currencies);
    expect(currencyName).toBe("Euro");
  });
});
