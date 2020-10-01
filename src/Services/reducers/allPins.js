import { combineReducers } from "redux";
import * as constants from "../constants";

const allPins = (state = [], action) => {
  switch (action.type) {
    case constants.GET_ALL_PINS_REQUEST:
      return [];
    case constants.GET_ALL_PINS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default allPins;

export const getAllPins = (state) => state;
