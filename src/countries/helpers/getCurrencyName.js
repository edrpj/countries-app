export const getCurrencyName = (currencies) => {
  return currencies[Object.keys(currencies)[0]].name;
};
