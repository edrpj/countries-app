import { useThemeMode } from "../hooks/useThemeMode";

export const Loading = () => {
  const { isLight, bgColorContainer } = useThemeMode();

  return (
    <div
      className={`w-100 h-100 m-0-auto d-flex justify-content-center flex-1 ${bgColorContainer}`}
    >
      <div
        aria-label="spinner"
        className={`spinner-border ${isLight ? "text-dark" : "text-warning"}`}
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
