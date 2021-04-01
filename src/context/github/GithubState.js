import React, { useReducer } from "react";
import axios from "axios";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import {
  SEARCH_USER,
  CLEAR_SEARCH,
  SET_RESULT,
  GET_REPOS,
  GET_ORGS,
  GIT_ERROR,
  CLEAR_GIT_ERROR,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    user: {},
    result: false,
    repos: [],
    orgs: [],
    error: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User
  const getUser = async (username) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      console.log("i work");

      dispatch({ type: SEARCH_USER, payload: res.data });

      getRepos(username);

      getOrgs(username);

      setResult();
    } catch (error) {
      gitError("User does not exist");
    }
  };

  // Get repo
  const getRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Get orgs
  const getOrgs = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/orgs?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_ORGS, payload: res.data });
  };

  // Set result
  const setResult = () => {
    dispatch({ type: SET_RESULT });
  };

  // Get git error
  const gitError = (msg) => {
    dispatch({ type: GIT_ERROR, payload: msg });

    setTimeout(() => {
      clearGitError();
    }, 5000);
  };

  // clear alert
  const clearGitError = () => dispatch({ type: CLEAR_GIT_ERROR });

  // Clear User
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        result: state.result,
        repos: state.repos,
        orgs: state.orgs,
        error: state.error,
        getUser,
        getRepos,
        getOrgs,
        clearSearch,
        gitError,
        clearGitError,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
