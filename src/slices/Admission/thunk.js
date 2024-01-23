import axios from "axios";
import { setAdmissionData, setEdit } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetAllProccess = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/admission/GetAllProccess")
    .then((response) => {
      // console.log(response);
      dispatch(setAdmissionData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetAllaccept = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/admission/GetAllAccept")
    .then((response) => {
      // console.log(response);
      dispatch(setAdmissionData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetAllreject = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/admission/GetAllReject")
    .then((response) => {
      // console.log(response);
      dispatch(setAdmissionData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetDetailadmission = (id) => async (dispatch) => {
  axios
    .get(`https://localhost:7112/api/dashboard/admission/${id}`)
    .then((response) => {
      // console.log(response);
      dispatch(setEdit(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const accept = (id, history) => async (dispatch) => {
  axios
    .post(`https://localhost:7112/api/dashboard/admission/${id}/accept`)
    .then((response) => {
      // console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/admission/proccess");
    })
    .catch((error) => {
      console.log(error);
      // dispatch(errorMessage(error.response.data));
    });
};
export const reject = (id, history) => async (dispatch) => {
  axios
    .post(`https://localhost:7112/api/dashboard/admission/${id}/reject`)
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/admission/proccess");
    })
    .catch((error) => {
      console.log(error);
      // dispatch(errorMessage(error.response.data));
    });
};
// export const DeleteFaculty = (id) => async (dispatch) => {
//   axios
//     .delete(`https://localhost:7112/api/dashboard/Faculty/${id}`)
//     .then((response) => {
//       // console.log(response);
//       if (response.data.message) {
//         dispatch(setMessage(response.data.message));
//       }
//       if (response.data.data) {
//         dispatch(removeFaculty(response.data.data));
//       }
//     })
//     .catch((error) => {
//       // console.log(error);
//       dispatch(errorMessage(error.response.data.message));
//     });
// };
