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

export const admission = (formData) => async (dispatch) => {
  // console.log(formData);
  axios
    .post("https://localhost:7112/api/home/admission/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage("You have already registered with this login information before."));
    });
};
