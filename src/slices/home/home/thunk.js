import axios from "axios";
import { setFacultyData, setArticleData, setSelectOption } from "./reducer";
import { setMessage, errorMessage } from "../../message/reducer";
export const Gethome = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/GetHome")
    .then((response) => {
      console.log(response);
      const { data, data2, selectOption } = response.data;
      dispatch(setFacultyData(data));
      dispatch(setArticleData(data2));
      dispatch(setSelectOption(selectOption));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Content-Type: application/json

export const admission = (values) => async (dispatch) => {
  console.log(values);
  axios
    .post("https://localhost:7112/api/home/admission", values, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      // if (response.data.message) {
      // dispatch(setMessage(response.data.message));
      // }
      // history("/dashboard/staffs");
    })
    .catch((error) => {
      console.log(error);
      // dispatch(errorMessage(error.response.data));
    });
};
