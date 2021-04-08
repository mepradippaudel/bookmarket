const currentNepaliDollerRate = 119.51;

const convertDollerValueTORupee = (price) => {
  const splitString = price.split("$");
  const [_, value] = splitString;
  return `Rs. ${(value * currentNepaliDollerRate).toFixed(2)}`;
};

export { convertDollerValueTORupee };
