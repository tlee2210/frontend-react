import axios from "axios";
import { setSelectOption } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetCreatestudent = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/student/GetCreate")
    .then((response) => {
      // console.log(response);
      dispatch(setSelectOption(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const studentStore = (formData, history) => async (dispatch) => {
  console.log(formData);
  // axios
  //   .post("https://localhost:7112/api/dashboard/staff/Create", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     if (response.data.message) {
  //       dispatch(setMessage(response.data.message));
  //     }
  //     history("/dashboard/staffs");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     // dispatch(errorMessage(error.response.data));
  //   });
};
// export const GetEditstaff = (id) => async (dispatch) => {
//   axios
//     .get(`https://localhost:7112/api/dashboard/staff/${id}/GetEdit`)
//     .then((response) => {
//       console.log(response);
//       dispatch(setEdit(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// export const UpdateStaff = (formData, history) => async (dispatch) => {
//   axios
//     .post("https://localhost:7112/api/dashboard/staff/Update", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       // if (response.data.message) {
//       //   dispatch(setMessage(response.data.message));
//       // }
//       // history("/dashboard/article");
//     })
//     .catch((error) => {
//       console.log(error);
//       // dispatch(errorMessage(error.response.data));
//     });
// };
// export const Deletestaff = (id) => async (dispatch) => {
//   axios
//     .delete(`https://localhost:7112/api/dashboard/staff/${id}/delete`)
//     .then((response) => {
//       console.log(response);
//       if (response.data.message) {
//         dispatch(setMessage(response.data.message));
//       }
//       if (response.data.data) {
//         dispatch(removeStaff(response.data.data));
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
