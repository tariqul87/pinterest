import { RSAA } from "redux-api-middleware";
import * as constants from "../constants";

export const fetchTestData = () => ({
  [RSAA]: {
    endpoint: "/test/test",
    method: "GET",
    types: [
      constants.GET_TEST_REQUEST,
      constants.GET_TEST_SUCCESS,
      constants.GET_TEST_FAILURE,
    ],
  },
});
