export const customSelectStyles = (isLight) => {
  const bgColor = isLight ? "white" : "#2a3641";
  const textColor = isLight ? "black" : "white";
  const bgHoverColor = isLight ? "#cff4fc" : "#414547";
  const selectedOptionColor = isLight ? "#a7ecfa" : "#232b30";

  return {
    control: (styles) => ({
      ...styles,
      background: bgColor,
      borderColor: bgColor,
      minHeight: "100%",
      height: "55px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      "&:hover": {
        borderColor: bgColor,
      },
    }),

    option: (styles, state) => ({
      ...styles,
      color: textColor,
      backgroundColor: state.isSelected ? selectedOptionColor : bgColor,
      "&:hover": {
        backgroundColor: bgHoverColor,
      },
    }),

    menu: (styles) => ({
      ...styles,
      backgroundColor: bgColor,
    }),

    valueContainer: (styles) => ({
      ...styles,
      height: "30px",
      padding: "0 22px",
    }),

    input: (styles) => ({
      ...styles,
      margin: "0px",
    }),

    singleValue: (styles) => ({
      ...styles,
      color: textColor,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    indicatorsContainer: (styles) => ({
      ...styles,
      height: "55px",
    }),
  };
};
