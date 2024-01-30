import axios from "axios";
import { setcoursesData } from "./reducer";
import { setMessage, errorMessage } from "../../message/reducer";
export const Gethomecourses = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/home/courses/GetList")
    .then((response) => {
      console.log(response);
      dispatch(setcoursesData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetFacultyByCourseSlug = (slug) => async (dispatch) => {
  await axios
    .get(
      `https://localhost:7112/api/home/courses/GetFacultyByCourseSlug/${slug}`
    )
    .then((response) => {
      console.log(response);
      dispatch(setcoursesData(response.data));
      // dispatch(setCategoryData(data2));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const SearchFacultyByTitle = (slug) => async (dispatch) => {
  await axios
    .get(`https://localhost:7112/api/home/courses/SearchFacultyByTitle/${slug}`)
    .then((response) => {
      console.log(response);
      dispatch(setcoursesData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};