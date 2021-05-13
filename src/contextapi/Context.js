import React, { useState, createContext } from "react";

export const ContextProvider = createContext();
export const Context = (props) => {
  const [alertProps, setAlertProps] = useState({
    open: false,
    alert: "",
    msg: "",
  });
  return (
    <ContextProvider.Provider value={{ alertProps, setAlertProps }}>
      {props.children}
    </ContextProvider.Provider>
  );
};
