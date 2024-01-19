import axios from "axios";
import {
  setDepartmentData,
  removeDepartment,
  setEdit
} from "./reducer";
import { setMessage , errorMessage } from "../message/reducer";
export const GetDepartment = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/department/GetList")
    .then((response) => {
      console.log(response);
      dispatch(setDepartmentData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const DepartmentStore = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/department/create", formData)
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/department");
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
export const GetEditDepartment = (id) => async (dispatch) => {
  axios
    .get(`https://localhost:7112/api/dashboard/department/${id}/edit`)
    .then((response) => {
      console.log(response);
      dispatch(setEdit(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const UpdateDepartment = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/department/update", formData)
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/department");
    })
    .catch((error) => {
      // console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
export const DeleteDepartment = (id) => async (dispatch) => {
  axios
    .delete(`https://localhost:7112/api/dashboard/department/${id}`)
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      if (response.data.data) {
        dispatch(removeDepartment(response.data.data));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
