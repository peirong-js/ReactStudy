export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObj = (obj) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
