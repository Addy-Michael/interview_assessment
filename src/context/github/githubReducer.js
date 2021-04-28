import { SEARCH_USER, CLEAR_SEARCH, SET_RESULT, GET_REPOS } from "../types";

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
        result: false,
      };

    default:
      return state;
  }
};
