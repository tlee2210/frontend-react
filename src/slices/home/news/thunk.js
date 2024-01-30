import axios from "axios";
import { setfacilitiesData } from "./reducer";
import { setMessage, errorMessage } from "../../message/reducer";
export const Gethomefacilities = () => async (dispatch) => {
  await axios
    .get("GethomeArtical")
    .then((response) => {
      console.log(response);
      // const { data, data2, selectOption } = response.data;
      dispatch(setfacilitiesData(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
