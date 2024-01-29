import axios from "axios";
import {
  setSelectOption,
  setFacultyData,
  removeFaculty,
  setEdit,
} from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetFaculty = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Faculty/GetList")
    .then((response) => {
      // console.log(response);
      dispatch(setFacultyData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetCreateFaculty = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Faculty/GetCreate")
    .then((response) => {
      // console.log(response);
      dispatch(setSelectOption(response.data));
    })
    .catch((error) => {
      // console.log(error);
      dispatch(errorMessage(error.response.data));
    });
};
export const FacultyStore = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/Faculty/Store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/faculty");
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
export const GetEditFaculty = (id) => async (dispatch) => {
  axios
    .get(`https://localhost:7112/api/dashboard/Faculty/${id}/edit`)
    .then((response) => {
      console.log(response);
      dispatch(setEdit(response.data.model));
      dispatch(setSelectOption(response.data.selectOption));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const UpdateFaculty = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/Faculty/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/faculty");
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
export const DeleteFaculty = (id) => async (dispatch) => {
  axios
    .delete(`https://localhost:7112/api/dashboard/Faculty/${id}`)
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      if (response.data.data) {
        dispatch(removeFaculty(response.data.data));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
