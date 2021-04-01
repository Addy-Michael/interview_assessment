import {
  SEARCH_USER,
  CLEAR_SEARCH,
  SET_RESULT,
  GET_REPOS,
  GET_ORGS,
  GIT_ERROR,
  CLEAR_GIT_ERROR,
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    case GET_ORGS:
      return {
        ...state,
        orgs: action.payload,
      };

    case SET_RESULT:
      return {
        ...state,
        result: true,
      };

    case CLEAR_SEARCH:
    case CLEAR_GIT_ERROR:
      return {
        ...state,
        user: {},
        repos: [],
        orgs: [],
        result: false,
        error: null,
      };

    default:
      return state;
  }
};

export default githubReducer;
