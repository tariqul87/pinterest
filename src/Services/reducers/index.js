import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import allPinsReducer, * as fromAllPins from "./allPins";

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
    allPins: allPinsReducer,
  });

export default (history) => (state, action) => {
  return reducers(history)(state, action);
};

export const getAllPins = (state) => fromAllPins.getAllPins(state.allPins);
