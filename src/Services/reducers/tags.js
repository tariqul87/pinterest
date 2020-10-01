import { constant } from "lodash";
import * as constants from "../constants";

const tagsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.GET_ALL_TAGS_REQUEST:
      return [];
    case constants.GET_ALL_TAGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default tagsReducer;
export const getTags = (state) => state;
