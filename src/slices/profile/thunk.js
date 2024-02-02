import axios from "axios";
import { setprofileData, setSessionsGrouped } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetStudentProfile = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/ProfileStudent/GetStudentProfile")
    .then((response) => {
      console.log(response);
      dispatch(setprofileData(response.data.students));
      dispatch(
        setSessionsGrouped(response.data.departmentSemesterSessionsGrouped)
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetStaffProfile = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/ProfileStaff/GetStaffProfile")
    .then((response) => {
      console.log(response);
      dispatch(setprofileData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const ChangePasswordStaff = (formData) => async (dispatch) => {
  await axios
    .post("https://localhost:7112/api/ProfileStaff/ChangePassword", formData)
    .then((response) => {
      // console.log(response);
      dispatch(setMessage(response.data.message));
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};

export const ChangePasswordStudent = (formData) => async (dispatch) => {
  await axios
    .post("https://localhost:7112/api/ProfileStudent/ChangePassword", formData)
    .then((response) => {
      // console.log(response);
      dispatch(setMessage(response.data.message));
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
// feedback
export const feedbackStudent = (Description) => async (dispatch) => {
  await axios
    .post(`https://localhost:7112/api/home/feedback?Description=${Description}`)
    .then((response) => {
      // console.log(response);
      dispatch(setMessage(response.data.message));
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorMessage("You have already registered with this login information before."));
    });
};
