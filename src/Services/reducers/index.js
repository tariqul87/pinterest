import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import allPinsReducer, * as fromAllPins from "./allPins";
import tagsReducer, * as fromTags from "./tags";
import pinReducer, * as fromPin from "./pin";

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
    tags: tagsReducer,
    pin: pinReducer,
  });

export default (history) => (state, action) => {
  return reducers(history)(state, action);
};

export const getAllPins = (state) => fromAllPins.getAllPins(state.allPins);
export const getAllTags = (state) => fromTags.getTags(state.tags);
export const getPin = (state) => fromPin.getPin(state.pin);
