import axios from "axios";
import { setarticalData, setCategoryData, setItemData } from "./reducer";
import { setMessage, errorMessage } from "../../message/reducer";
export const Gethomeartical = () => async (dispatch) => {
  await axios
    .get("https://localhost:7112/api/home/homeartical")
    .then((response) => {
      console.log(response);
      const { data, data2 } = response.data;
      dispatch(setarticalData(data));
      dispatch(setCategoryData(data2));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const Gethomearticalsearch = (search) => async (dispatch) => {
  await axios
    .get(`https://localhost:7112/api/home/homeartical/Search?search=${search}`)
    .then((response) => {
      console.log(response);
      // const { data, data2 } = response.data;
      dispatch(setarticalData(response.data));
      // dispatch(setCategoryData(data2));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const SearchByCategory = (Id) => async (dispatch) => {
  await axios
    .get(`https://localhost:7112/api/home/homeartical/SearchByCategory/${Id}`)
    .then((response) => {
      console.log(response);
      dispatch(setarticalData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
// https://localhost:7112/api/home/homeartical/GetDetail/1
export const GetDetailArtical = (Id) => async (dispatch) => {
  await axios
    .get(`https://localhost:7112/api/home/homeartical/GetDetail/${Id}`)
    .then((response) => {
      console.log(response);
      dispatch(setItemData(response.data.data));
      dispatch(setarticalData(response.data.listData));
    })
    .catch((error) => {
      console.log(error);
    });
};
