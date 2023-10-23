import React from "react";
import PropTypes from "prop-types";
import { Provider as MealsProvider } from "./MealsContext";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <MealsProvider>{children}</MealsProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};


export { Context, Provider };
