import { useContext } from "react";

import { ThemeContext } from "../../theme/ThemeContext";
import { themeType } from "../../theme/themeType";
import { colorType } from "../types/colorType";

const {
  bgLightMode,
  bgElementsDarkMode,
  bgContainerDarkMode,
  bgBtnLightMode,
  textDarkMode,
  textLightMode,
  textInputDarkMode,
  textInputLightMode,
} = colorType;

export const useThemeMode = () => {
  const themeContextValue = useContext(ThemeContext);
  const { theme, onChangeTheme } = themeContextValue;

  const themeMode = localStorage.getItem("mode");
  const isLight = themeMode === themeType.light;

  const bgColorContainer = isLight ? bgLightMode : bgContainerDarkMode;
  const bgColorElements = isLight ? bgLightMode : bgElementsDarkMode;
  const bgColorBtn = isLight ? bgBtnLightMode : bgElementsDarkMode;
  const textColor = isLight ? textLightMode : textDarkMode;
  const textInputColor = isLight ? textInputLightMode : textInputDarkMode;

  return {
    bgColorContainer,
    bgColorElements,
    bgColorBtn,
    textColor,
    textInputColor,
    isLight,
    onChangeTheme,
    theme,
  };
};
