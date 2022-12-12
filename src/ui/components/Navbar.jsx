import { Link } from "react-router-dom";

import { useThemeMode } from "../../countries/hooks/useThemeMode";

export const Navbar = () => {
  const { bgColorElements, textColor, onChangeTheme, theme } = useThemeMode();

  return (
    <nav className={`navbar shadow-sm py-3 ${bgColorElements}`}>
      <div className="container-fluid px-0 w-90 m-auto">
        <Link
          aria-label="logo"
          className={`navbar-brand font-extrabold ${textColor}`}
          to="countries"
        >
          Where in the world?
        </Link>
        <div
          aria-label="changeThemeDiv"
          className="d-flex align-items-center cursor-pointer"
          onClick={() => onChangeTheme(theme)}
        >
          <i
            aria-label="iTag"
            className={`fa-regular fa-moon d-flex align-items-center ${textColor}`}
          ></i>
          <p
            aria-label="paragraph"
            className={`${textColor} font-semibold ms-2 m-0-auto`}
          >
            Dark Mode
          </p>
        </div>
      </div>
    </nav>
  );
};
