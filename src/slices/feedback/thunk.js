import axios from "axios";
import { setData, setitem } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetListUnprocess = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Feedback/GetListUnprocess")
    .then((response) => {
      console.log(response);
      dispatch(setData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetListProcess = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Feedback/GetListProcess")
    .then((response) => {
      console.log(response);
      dispatch(setData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetdetailFeedback = (id) => async (dispatch) => {
  await axios
    .get(`https://localhost:7112/api/dashboard/Feedback/${id}/detail`)
    .then((response) => {
      console.log(response);
      dispatch(setitem(response.data));
    })
    .catch((error) => {
      console.log(error);
      // dispatch(errorMessage(error.response.data));
    });
};
export const SeenFeedback = (formData, history) => async (dispatch) => {
  axios
    .post(`https://localhost:7112/api/dashboard/Feedback`, formData)
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      history("/dashboard/feedback/Process");
    })
    .catch((error) => {
      console.log(error);
      // dispatch(errorMessage(error.response.data));
    });
};
// export const GetEditFaculty = (id) => async (dispatch) => {
//   axios
//     .get(`https://localhost:7112/api/dashboard/Faculty/${id}/edit`)
//     .then((response) => {
//       console.log(response);
//       dispatch(setEdit(response.data.model));
//       dispatch(setSelectOption(response.data.selectOption));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// export const UpdateFaculty = (formData, history) => async (dispatch) => {
//   axios
//     .post("https://localhost:7112/api/dashboard/Faculty/update", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => {
//       // console.log(response);
//       if (response.data.message) {
//         dispatch(setMessage(response.data.message));
//       }
//       history("/dashboard/faculty");
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch(errorMessage(error.response.data.message));
//     });
// };
