import axios from "axios";
import { setprofileData } from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
export const GetStudentProfile = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/ProfileStudent/GetStudentProfile")
    .then((response) => {
      console.log(response);
      dispatch(setprofileData(response.data));
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
