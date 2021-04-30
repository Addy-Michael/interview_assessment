import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className='container'>
        <div className='alert'>{alert.msg}</div>
      </div>
    )
  );
};

export default Alert;
