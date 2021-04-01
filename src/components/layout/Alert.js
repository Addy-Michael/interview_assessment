import React, { useContext, Fragment } from "react";
import AlertContext from "../../context/alert/alertContext";
import GitContext from "../../context/github/githubContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const gitContext = useContext(GitContext);
  const { alert } = alertContext;
  const { error } = gitContext;

  if (error) {
    return (
      <div className='container'>
        <div className='alert'>{error}</div>
      </div>
    );
  }

  return (
    <Fragment>
      {alert !== null && (
        <div className='container'>
          <div className='alert'>{alert.msg}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
