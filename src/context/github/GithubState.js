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
} from "../types";

const GithubState = (props) => {
  const initialState = {
    user: {},
    result: false,
    repos: [],
    orgs: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User
  const getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USER, payload: res.data });

    setResult();
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

  // Clear User
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        result: state.result,
        repos: state.repos,
        orgs: state.orgs,
        getUser,
        getRepos,
        getOrgs,
        clearSearch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
