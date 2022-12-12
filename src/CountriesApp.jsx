import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "./theme/ThemeProvider";

export const CountriesApp = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};
