import React, { useReducer } from "react";
import reducer from "../reducers";

const initialState = { cart: [] };
export const Context = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default AppProvider;
