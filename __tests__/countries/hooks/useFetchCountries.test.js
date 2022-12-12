import { renderHook, waitFor } from "@testing-library/react";
import { useFetchCountries } from "../../../src/countries/hooks/useFetchCountries";

describe("Testing useFetchCountries", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useFetchCountries("/all"));
    const { countries, isLoading } = result.current;

    expect(countries.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  it("should return the countries", async () => {
    const { result } = renderHook(() => useFetchCountries("/all"));

    await waitFor(() =>
      expect(result.current.countries.length).toBeGreaterThan(0)
    );

    const { countries, isLoading } = result.current;

    expect(countries.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

  it("should trigger the catch block", async () => {
    const { result } = renderHook(() =>
      useFetchCountries("/name/foobarfoobarfoobar")
    );

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    const { countries, isLoading } = result.current;

    expect(countries.length).toBe(0);
    expect(isLoading).toBeFalsy();
  });
});
