import axios from "axios";
import {
  setcoursesData,
  SetDetail,
  setSessionsGrouped,
  setcoursesItem,
} from "./reducer";
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
      dispatch(setcoursesData(response.data.listData));
      dispatch(setcoursesItem(response.data.data));
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
export const GetFacultyDetails = (slug) => async (dispatch) => {
  await axios
    .get(`https://localhost:7112/api/home/courses/GetFacultyDetails/${slug}`)
    .then((response) => {
      console.log(response);
      dispatch(SetDetail(response.data.faculty));
      dispatch(
        setSessionsGrouped(response.data.departmentSemesterSessionsGrouped)
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
