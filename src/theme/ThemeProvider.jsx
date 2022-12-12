import { useCallback, useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext";
import { themeType } from "./themeType";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeType.light);

  const onChangeTheme = useCallback(
    (actualTheme) => {
      switch (actualTheme) {
        case themeType.light: {
          localStorage.setItem("mode", themeType.dark);
          setTheme(themeType.dark);
          break;
        }
        case themeType.dark: {
          localStorage.setItem("mode", themeType.light);
          setTheme(themeType.light);
          break;
        }
        default:
          break;
      }
    },
    [theme]
  );

  const contextValue = useMemo(
    () => ({
      theme,
      onChangeTheme,
    }),
    [theme, onChangeTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
