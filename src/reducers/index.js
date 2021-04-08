function reducer(state, action) {
  switch (action.type) {
    case "cart":
      return {
        ...state,
        cart: [action.value, ...state.cart],
      };
    default:
      throw new Error();
  }
}

export default reducer;
