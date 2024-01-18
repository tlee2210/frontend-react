import axios from "axios";
import {
  setdataCourses,
  addCourses,
  updateCourses,
  removeCourse,
} from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetCourses = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Courses/GetList")
    .then((response) => {
      // console.log(response);
      dispatch(setdataCourses(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const CreateCourses = (formData) => async (dispatch) => {
  await axios
    .post(`https://localhost:7112/api/dashboard/Courses`, formData)
    .then((response) => {
      // console.log(response);
      dispatch(addCourses(response.data.data));
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch(errorMessage(err.response.data.message));
    });
};
export const deleteCourses = (id) => async (dispatch) => {
  await axios
    .delete(`https://localhost:7112/api/dashboard/Courses/${id}`)
    .then((response) => {
      // console.log(response);
      dispatch(removeCourse(response.data.data.id));
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch(errorMessage(err.response.data.message));
    });
};
export const UpdateCourses = (formData) => async (dispatch) => {
  await axios
    .put(`https://localhost:7112/api/dashboard/Courses`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // console.log(response);
      dispatch(updateCourses(response.data.data));
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch(errorMessage(err.response.data.message));
    });
};
