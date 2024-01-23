import axios from "axios";
import { setSessionData } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetSession = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/Session/GetList")
    .then((response) => {
      console.log(response);
      dispatch(setSessionData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const createSession = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/Session/create")
    .then((response) => {
      console.log(response);
      dispatch(setMessage(response.data.message));
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
