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

export const fetchAllPins = () => ({
  [RSAA]: {
    endpoint: "/api/pins/",
    method: "GET",
    types: [
      constants.GET_ALL_PINS_REQUEST,
      constants.GET_ALL_PINS_SUCCESS,
      constants.GET_ALL_PINS_FAILURE,
    ],
  },
});

export const fetchTags = () => ({
  [RSAA]: {
    endpoint: "/api/tags/",
    method: "GET",
    types: [
      constants.GET_ALL_TAGS_REQUEST,
      constants.GET_ALL_TAGS_SUCCESS,
      constants.GET_ALL_TAGS_FAILURE,
    ],
  },
});

const createFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined || data[key] !== "") {
      formData.append(key, data[key]);
    }
  });

  return formData;
};

export const createPin = (data) => ({
  [RSAA]: {
    endpoint: "/api/pins/",
    method: "POST",
    body: createFormData(data),
    types: [
      constants.CREATE_PIN_REQUEST,
      constants.CREATE_PIN_SUCCESS,
      constants.CREATE_PIN_FAILURE,
    ],
  },
});

export const resetPinData = () => ({
  type: constants.CREATE_PIN_REQUEST,
  payload: {},
});
