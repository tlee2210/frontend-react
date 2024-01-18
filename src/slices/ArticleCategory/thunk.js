import axios from "axios";
import {
  setdataCategory,
  addCategory,
  removeCategories,
  updateCategories,
  setMsg,
  errorMsg,
} from "./reducer";
export const GetCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://localhost:7112/api/dashboard/Category"
    );
    // console.log(response);
    dispatch(setdataCategory(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const CreateCategories = (name) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://localhost:7112/api/dashboard/Category?name=${name}`
    );
    // console.log(response);
    dispatch(addCategory(response.data.data));
    if (response.data.message) {
      dispatch(setMsg(response.data.message));
    }
  } catch (err) {
    // console.error(err);
    dispatch(errorMsg(err.response.data.message));
  }
};
export const deleteCategories = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://localhost:7112/api/dashboard/Category/id?id=${id}`
    );
    // console.log(response);
    dispatch(removeCategories(response.data.data.id));
    if (response.data.message) {
      dispatch(setMsg(response.data.message));
    }
  } catch (err) {
    if (err.response && err.response.status === 400) {
      console.log("Lỗi 400: Bad Request - ", err.response);
    } else {
      console.log("Lỗi khác: ", err);
    }
  }
};
export const UpdateCategories = (Categories) => async (dispatch) => {
  // console.log(Categories);
  try {
    const response = await axios.put(
      `https://localhost:7112/api/dashboard/Category`,
      { Name: Categories.name, id: Categories.id }
    );
    console.log(response);
    dispatch(updateCategories(response.data.data));
    if (response.data.message) {
      dispatch(setMsg(response.data.message));
    }
  } catch (err) {
    console.log(err.data);
  }
};
