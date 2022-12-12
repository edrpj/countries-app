import { getCountries } from "../../../src/countries/services/getCountries";

describe("Testing getCountries Service", () => {
  it("should return all the countries", async () => {
    const query = "/all";
    const countries = await getCountries(query);
    expect(countries.length).toBe(250);
  });

  it("should return the information about Colombia", async () => {
    const query = "/alpha/COL";
    const colombiaInfo = await getCountries(query);
    expect(colombiaInfo[0].name.common).toBe("Colombia");
  });
});
