import { regionOptions } from "../../../src/countries/data/regions";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

describe("Testing regions object", () => {
  it("should the regions object have the correct values and labels", () => {
    const allRegions = regionOptions[0];
    const africaRegion = regionOptions[1];
    const americaRegion = regionOptions[2];
    const asiaRegion = regionOptions[3];
    const europeRegion = regionOptions[4];
    const oceaniaRegion = regionOptions[5];

    expect(allRegions.value).toBe("all");
    expect(allRegions.label).toBe(capitalizeFirstLetter(allRegions.value));

    expect(africaRegion.value).toBe("africa");
    expect(africaRegion.label).toBe(capitalizeFirstLetter(africaRegion.value));

    expect(americaRegion.value).toBe("america");
    expect(americaRegion.label).toBe(
      capitalizeFirstLetter(americaRegion.value)
    );

    expect(asiaRegion.value).toBe("asia");
    expect(asiaRegion.label).toBe(capitalizeFirstLetter(asiaRegion.value));

    expect(europeRegion.value).toBe("europe");
    expect(europeRegion.label).toBe(capitalizeFirstLetter(europeRegion.value));

    expect(oceaniaRegion.value).toBe("oceania");
    expect(oceaniaRegion.label).toBe(
      capitalizeFirstLetter(oceaniaRegion.value)
    );
  });
});
