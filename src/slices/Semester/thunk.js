import axios from "axios";
import { setSelectOption, setSemesterData } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetCreateSemester = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Semester/GetCreate")
    .then((response) => {
      // console.log(response);
      dispatch(setSelectOption(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetParameters = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Semester/GetParameters")
    .then((response) => {
      // console.log(response);
      dispatch(setSelectOption(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetSearch = (values) => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/dashboard/Semester", { params: values })
    .then((response) => {
      console.log(response);
      dispatch(setSemesterData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const SemesterStore = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/Semester", formData)
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        dispatch(setMessage(response.data.message));
      }
      // history("/dashboard/students");
    })
    .catch((error) => {
      // console.log(error);
      dispatch(errorMessage(error.response.data.message));
    });
};
//localhost:7112/api/dashboard/Semester/1//delete
export const deleteSemester = (id) => async (dispatch) => {
  axios
    .delete(`https://localhost:7112/api/dashboard/Semester/${id}/delete`)
    .then((response) => {
      console.log(response);
      dispatch(setMessage(response.data.message));
    })
    .catch((error) => {
      console.log(error);
    });
};
// export const getEditStudent = (id, history) => async (dispatch) => {
//   axios
//     .get(`https://localhost:7112/api/dashboard/student/${id}/GetEdit`)
//     .then((response) => {
//       console.log(response);
//       dispatch(setSelectOption(response.data.selectOption));
//       dispatch(setEdit(response.data.model));
//       // setEdit;
//       // history("/dashboard/article");
//     })
//     .catch((error) => {
//       console.log(error);
//       // dispatch(errorMessage(error.response.data));
//     });
// };
// export const studentUpdate = (formData, history) => async (dispatch) => {
//   // console.log(formData);
//   axios
//     .post("https://localhost:7112/api/dashboard/student/Update", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       if (response.data.message) {
//         dispatch(setMessage(response.data.message));
//       }
//       history("/dashboard/students");
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch(errorMessage(error.response.data.message));
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
