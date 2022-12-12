import { themeType } from "../../src/theme/themeType";

describe("Testing themeType", () => {
  it("should the themeType object have the correct values", () => {
    const { light, dark } = themeType;

    expect(light).toBe("LIGHT");
    expect(dark).toBe("DARK");
  });
});
