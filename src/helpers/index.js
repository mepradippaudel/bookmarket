const currentNepaliDollerRate = 119.51;

const convertDollerValueTORupee = (price) => {
  const splitString = price.split("$");
  const [_, value] = splitString;
  return (value * currentNepaliDollerRate).toFixed(2);
};

const getTotalAmount = (data) => {
  return data.reduce((sum, current) => {
    return (sum =
      sum + convertDollerValueTORupee(current.price) * current.quantity);
  }, 0);
};

export { convertDollerValueTORupee, getTotalAmount };
