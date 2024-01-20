import axios from "axios";
import {
  setSelectOption,
  setArticleData,
  removeArticle,
  setEdit,
} from "./reducer";
import { setMessage, errorMessage } from "../message/reducer";
// export const GetArticle = () => async (dispatch) => {
//   await axios
//     .get("https://localhost:7112/api/dashboard/Article/GetArticle")
//     .then((response) => {
//       // console.log(response);
//       dispatch(setArticleData(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
export const FacilitiesStore = (formData, history) => async (dispatch) => {
  axios
    .post("https://localhost:7112/api/dashboard/Faciliti/Create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
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
// export const GetEditArticle = (id) => async (dispatch) => {
//   axios
//     .get(`https://localhost:7112/api/dashboard/Article/${id}/edit`)
//     .then((response) => {
//       // console.log(response);
//       dispatch(setEdit(response.data.data.model));
//       dispatch(setSelectOption(response.data.data.selectOption));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// export const UpdateArticle = (formData, history) => async (dispatch) => {
//   axios
//     .post("https://localhost:7112/api/dashboard/Article/update", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => {
//       // console.log(response);
//       if (response.data.message) {
//         dispatch(setMessage(response.data.message));
//       }
//       history("/dashboard/article");
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//       dispatch(errorMessage(error.response.data));
//     });
// };
// export const DeleteArticle = (id) => async (dispatch) => {
//   axios
//     .delete(`https://localhost:7112/api/dashboard/Article/${id}`)
//     .then((response) => {
//       // console.log(response);
//       if (response.data.message) {
//         dispatch(setMessage(response.data.message));
//       }
//       if (response.data.data) {
//         dispatch(removeArticle(response.data.data));
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
