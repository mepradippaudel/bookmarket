function reducer(state, action) {
  switch (action.type) {
    case "cart":
      return {
        ...state,
        cart: [action.value, ...state.cart],
      };
    case "carts":
      return {
        ...state,
        cart: action.carts,
      };
    default:
      throw new Error();
  }
}

export default reducer;
