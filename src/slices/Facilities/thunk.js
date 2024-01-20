import axios from "axios";
import {
  setFacilitiesData,
  removeFacilities,
  setEdit,
} from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetFacilities = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Facilitie/Getfacilities")
    .then((response) => {
      // console.log(response);
      dispatch(setFacilitiesData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const FacilitiesStore = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/Facilitie/Store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/facilities");
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data));
    });
};
export const GetEditFacilitie = (id) => async (dispatch) => {
  axios
    .get(`https://localhost:7112/api/dashboard/Facilitie/${id}/edit`)
    .then((response) => {
      // console.log(response);
      dispatch(setEdit(response.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const UpdateFacilitie = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/Facilitie/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/facilities");
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch(errorMessage(error.response.data));
    });
};
export const DeleteFacilitie = (id) => async (dispatch) => {
  axios
    .delete(`https://localhost:7112/api/dashboard/Facilitie/${id}/delete`)
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      if (response.data.data) {
        dispatch(removeFacilities(response.data.data));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
