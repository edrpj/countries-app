import { render, screen } from "@testing-library/react";
import { Loading } from "../../../src/countries/components/Loading";
import { useThemeMode } from "../../../src/countries/hooks/useThemeMode";

jest.mock("../../../src/countries/hooks/useThemeMode");

describe("Testing <Loading />", () => {
  it("should do match with the snapshot", () => {
    useThemeMode.mockReturnValue({
      isLight: true,
      bgColorContainer: "bg-white",
    });

    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it("should use the correct text color when the app is in light mode", () => {
    const useThemeModeData = {
      isLight: true,
      bgColorContainer: "bg-white",
    };
    useThemeMode.mockReturnValue(useThemeModeData);

    render(<Loading />);
    const spinner = screen.getByLabelText("spinner");
    expect(spinner.className).toContain("text-dark");
  });

  it("should use the correct text color when the app is in dark mode", () => {
    const useThemeModeData = {
      isLight: false,
      bgColorContainer: "bg-white",
    };
    useThemeMode.mockReturnValue(useThemeModeData);

    render(<Loading />);
    const spinner = screen.getByLabelText("spinner");
    expect(spinner.className).toContain("text-warning");
  });
});
