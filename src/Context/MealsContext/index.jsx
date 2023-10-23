import React from "react";
import PropTypes from "prop-types";
import { reducer } from "./reducer";

const Context = React.createContext(null);

const initialState = {
  meals: [],
  mealsCategoriezed: [],
  searchFiltred: [],
  mealsCount: 8,
  mealsCategoriezedCount: 8,
};

const Provider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
