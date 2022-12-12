import React from "react";
import { renderHook } from "@testing-library/react";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { themeType } from "../../../src/theme/themeType";

const mockUseContext = jest.fn().mockImplementation(() => ({
  theme: themeType.light,
  onChangeTheme: jest.fn(),
}));

React.useContext = mockUseContext;

describe("Testing useThemeMode Hook", () => {
  it("should return the correct css classes when the app is in light mode", () => {
    localStorage.setItem("mode", themeType.light);

    const { result } = renderHook(() => useThemeMode());
    const {
      bgColorContainer,
      bgColorElements,
      bgColorBtn,
      textColor,
      textInputColor,
      isLight,
      onChangeTheme,
      theme,
    } = result.current;

    expect(bgColorContainer).toBe("bg-white");
    expect(bgColorElements).toBe("bg-white");
    expect(bgColorBtn).toBe("btn-white");
    expect(textColor).toBe("text-very-dark-blue");
    expect(textInputColor).toBe("text-dark-gray");
    expect(isLight).toBeTruthy();
    expect(theme).toBe(themeType.light);
    expect(typeof onChangeTheme).toBe("function");
  });

  it("should return the correct css classes when the app is in dark mode", () => {
    localStorage.setItem("mode", themeType.dark);

    const { result } = renderHook(() => useThemeMode());
    const {
      bgColorContainer,
      bgColorElements,
      bgColorBtn,
      textColor,
      textInputColor,
      isLight,
      onChangeTheme,
      theme,
    } = result.current;

    expect(bgColorContainer).toBe("bg-very-dark-blue");
    expect(bgColorElements).toBe("bg-dark-blue");
    expect(bgColorBtn).toBe("bg-dark-blue");
    expect(textColor).toBe("text-white");
    expect(textInputColor).toBe("text-white");
    expect(isLight).toBeFalsy();
    expect(theme).toBe(themeType.light);
    expect(typeof onChangeTheme).toBe("function");
  });
});
