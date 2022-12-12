import { colorType } from "../../../src/countries/types/colorType";

describe("Testing colorType", () => {
  it("should the colorType object have the correct css classes", () => {
    const {
      bgLightMode,
      bgContainerDarkMode,
      bgElementsDarkMode,
      bgBtnLightMode,
      textDarkMode,
      textLightMode,
      textInputDarkMode,
      textInputLightMode,
    } = colorType;

    expect(bgLightMode).toBe("bg-white");
    expect(bgContainerDarkMode).toBe("bg-very-dark-blue");
    expect(bgElementsDarkMode).toBe("bg-dark-blue");
    expect(bgBtnLightMode).toBe("btn-white");
    expect(textDarkMode).toBe("text-white");
    expect(textLightMode).toBe("text-very-dark-blue");
    expect(textInputDarkMode).toBe("text-white");
    expect(textInputLightMode).toBe("text-dark-gray");
  });
});
