export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getMatchingItem = (arr, {params}) => arr.find((item) => item.id === +(params.id));
