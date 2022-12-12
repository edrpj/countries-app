import { internationalNumberFormat } from "../../../src/countries/helpers/internationalNumberFormat";

describe("Testing internationalNumberFormat", () => {
  it("should return the formatted number", () => {
    const number = "123456789";
    const formattedNumber = internationalNumberFormat.format(number);

    expect(formattedNumber).toBe("123,456,789");
  });
});
