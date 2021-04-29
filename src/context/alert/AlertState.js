import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, CLEAR_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //   Set Alert
  const setAlert = (msg) => {
    dispatch({ type: SET_ALERT, payload: { msg } });

    setTimeout(() => {
      clearAlert();
    }, 5000);
  };

  // clear alert
  const clearAlert = () => dispatch({ type: CLEAR_ALERT });

  return (
    <AlertContext.Provider value={{ alert: state, setAlert, clearAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
