import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";
import { themeType } from "../../../src/theme/themeType";
import { Navbar } from "../../../src/ui/components/Navbar";

jest.mock("../../../src/countries/hooks/useThemeMode");

describe("Testing <Navbar />", () => {
  const useThemeModeData = {
    bgColorElements: "bg-white",
    textColor: "text-very-dark-blue",
    onChangeTheme: jest.fn(),
    theme: themeType.light,
  };
  useThemeMode.mockReturnValue(useThemeModeData);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should do match with snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("should set the css classes provided by the useThemeMode custom hook", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const { bgColorElements, textColor } = useThemeModeData;

    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain(bgColorElements);

    const link = screen.getByLabelText("logo");
    expect(link.className).toContain(textColor);

    const iTag = screen.getByLabelText("iTag");
    expect(iTag.className).toContain(textColor);

    const paragraph = screen.getByLabelText("paragraph");
    expect(paragraph.className).toContain(textColor);
  });

  it("should call the onChangeTheme function with the actual theme mode", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const changeThemeDiv = screen.getByLabelText("changeThemeDiv");
    fireEvent.click(changeThemeDiv);

    const { onChangeTheme, theme } = useThemeModeData;
    expect(onChangeTheme).toHaveBeenCalledWith(theme);
  });

  it("should navigate to the homepage when the logo is clicked", () => {
    const countriesH1Msg = "Countries";
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="countries" element={<h1>{countriesH1Msg}</h1>} />
        </Routes>
      </MemoryRouter>
    );

    const logo = screen.getByLabelText("logo");
    fireEvent.click(logo);

    expect(screen.getByText(countriesH1Msg));
  });
});
