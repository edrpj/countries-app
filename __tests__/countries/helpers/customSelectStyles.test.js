import { customSelectStyles } from "../../../src/countries/helpers/customSelectStyles";

describe("Testing customSelectStyles", () => {
  it("should return the correct styles when the app is in light mode", () => {
    const isLight = true;
    const styles = {};
    const state = {
      isSelected: false,
    };

    const {
      control,
      option,
      menu,
      valueContainer,
      input,
      singleValue,
      indicatorSeparator,
      indicatorsContainer,
    } = customSelectStyles(isLight);

    const controlStyles = control(styles);
    expect(controlStyles.background).toBe("white");
    expect(controlStyles.borderColor).toBe("white");
    expect(controlStyles.minHeight).toBe("100%");
    expect(controlStyles.height).toBe("55px");
    expect(controlStyles.boxShadow).toBe("0 3px 10px rgb(0 0 0 / 0.2)");
    expect(controlStyles["&:hover"].borderColor).toBe("white");

    const optionStyles = option(styles, state);
    expect(optionStyles.color).toBe("black");
    expect(optionStyles.backgroundColor).toBe("white");
    expect(optionStyles["&:hover"].backgroundColor).toBe("#cff4fc");

    const menuStyles = menu(styles);
    expect(menuStyles.backgroundColor).toBe("white");

    const valueContainerStyles = valueContainer(styles);
    expect(valueContainerStyles.height).toBe("30px");
    expect(valueContainerStyles.padding).toBe("0 22px");

    const inputStyles = input(styles);
    expect(inputStyles.margin).toBe("0px");

    const singleValueStyles = singleValue(styles);
    expect(singleValueStyles.color).toBe("black");

    const indicatorSeparatorStyles = indicatorSeparator(styles);
    expect(indicatorSeparatorStyles.display).toBe("none");

    const indicatorsContainerStyles = indicatorsContainer(styles);
    expect(indicatorsContainerStyles.height).toBe("55px");
  });

  it("should return the correct styles when the app is in dark mode", () => {
    const isLight = false;
    const styles = {};
    const state = {
      isSelected: false,
    };

    const {
      control,
      option,
      menu,
      valueContainer,
      input,
      singleValue,
      indicatorSeparator,
      indicatorsContainer,
    } = customSelectStyles(isLight);

    const controlStyles = control(styles);
    expect(controlStyles.background).toBe("#2a3641");
    expect(controlStyles.borderColor).toBe("#2a3641");
    expect(controlStyles.minHeight).toBe("100%");
    expect(controlStyles.height).toBe("55px");
    expect(controlStyles.boxShadow).toBe("0 3px 10px rgb(0 0 0 / 0.2)");
    expect(controlStyles["&:hover"].borderColor).toBe("#2a3641");

    const optionStyles = option(styles, state);
    expect(optionStyles.color).toBe("white");
    expect(optionStyles.backgroundColor).toBe("#2a3641");
    expect(optionStyles["&:hover"].backgroundColor).toBe("#414547");

    const menuStyles = menu(styles);
    expect(menuStyles.backgroundColor).toBe("#2a3641");

    const valueContainerStyles = valueContainer(styles);
    expect(valueContainerStyles.height).toBe("30px");
    expect(valueContainerStyles.padding).toBe("0 22px");

    const inputStyles = input(styles);
    expect(inputStyles.margin).toBe("0px");

    const singleValueStyles = singleValue(styles);
    expect(singleValueStyles.color).toBe("white");

    const indicatorSeparatorStyles = indicatorSeparator(styles);
    expect(indicatorSeparatorStyles.display).toBe("none");

    const indicatorsContainerStyles = indicatorsContainer(styles);
    expect(indicatorsContainerStyles.height).toBe("55px");
  });

  it("should return the correct backgroundColor for the option of the menu when the app is in light mode and the option is selected", () => {
    const isLight = true;
    const styles = {};
    const state = {
      isSelected: true,
    };

    const { option } = customSelectStyles(isLight);
    const optionStyles = option(styles, state);
    expect(optionStyles.backgroundColor).toBe("#a7ecfa");
  });

  it("should return the correct backgroundColor for the option of the menu when the app is in light mode and the option is NOT selected", () => {
    const isLight = true;
    const styles = {};
    const state = {
      isSelected: false,
    };

    const { option } = customSelectStyles(isLight);
    const optionStyles = option(styles, state);
    expect(optionStyles.backgroundColor).toBe("white");
  });

  it("should return the correct backgroundColor for the option of the menu when the app is in dark mode and the option is selected", () => {
    const isLight = false;
    const styles = {};
    const state = {
      isSelected: true,
    };

    const { option } = customSelectStyles(isLight);
    const optionStyles = option(styles, state);
    expect(optionStyles.backgroundColor).toBe("#232b30");
  });

  it("should return the correct backgroundColor for the option of the menu when the app is in dark mode and the option is NOT selected", () => {
    const isLight = false;
    const styles = {};
    const state = {
      isSelected: false,
    };

    const { option } = customSelectStyles(isLight);
    const optionStyles = option(styles, state);
    expect(optionStyles.backgroundColor).toBe("#2a3641");
  });
});
