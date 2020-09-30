import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = (history) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

export default (history) => (state, action) => {
  return reducers(history)(state, action);
};
