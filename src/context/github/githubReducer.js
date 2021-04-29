import {
  SEARCH_USER,
  CLEAR_SEARCH,
  SET_RESULT,
  GET_REPOS,
  GET_ORGS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
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
      return {
        ...state,
        user: {},
        repos: [],
        orgs: [],
        result: false,
      };

    default:
      return state;
  }
};
