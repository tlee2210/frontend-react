import axios from "axios";
import {
  setArticleData,
} from "./reducer";
import { setMessage , errorMessage } from "../message/reducer";
export const GetContactUs = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/ContactUs")
    .then((response) => {
      // console.log(response);
      dispatch(setArticleData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const UpdateContactUs = (formData) => async (dispatch) => {
  axios
    .put("https://localhost:7112/api/dashboard/ContactUs/Update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
    })
    .catch((error) => {
      console.log(error);
      // dispatch(errorMessage(error.response.data));
    });
};
