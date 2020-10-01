import * as constants from "../constants";

const pinReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CREATE_PIN_REQUEST:
      return [];
    case constants.CREATE_PIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default pinReducer;
export const getPin = (state) => state;
