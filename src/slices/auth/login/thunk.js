import axios from "axios";
import { setMessage, errorMessage } from "../../message/reducer";

// import {
//   loginSuccess,
//   logoutUserSuccess,
//   apiError,
//   reset_login_flag,
// } from "./reducer";

export const loginUser = (user, history) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("https://localhost:7112/api/AdminLogin", user)

      .then((response) => {
        console.log(response);
        const { token, user: userLogin } = response;
        sessionStorage.setItem("authUser", JSON.stringify(response));
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        const tokenObj = { accessToken: token }; // Token Obj
        const validUserObj = { ...userLogin, ...tokenObj }; // validUser Obj
        // dispatch(loginSuccess(userLogin));
        history("/home");
        resolve([200, validUserObj]);
      })
      .catch((e) => {
        console.error(e);
        // dispatch(apiError(e));
      });
  });
};

//login Staff
export const loginStaff = (user, history) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("https://localhost:7112/api/home/stafflogin", user)
      .then((response) => {
        console.log(response);
        const { token, user: userLogin } = response;
        sessionStorage.setItem("authUser", JSON.stringify(response.data));
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        const tokenObj = { accessToken: token }; // Token Obj
        const validUserObj = { ...userLogin, ...tokenObj }; // validUser Obj
        // dispatch(loginSuccess(userLogin));
        history("/home");
        resolve([200, validUserObj]);
      })
      .catch((e) => {
        console.error(e);
        dispatch(errorMessage(e.response.data.message));
      });
  });
};
export const loginStudent = (user, history) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("https://localhost:7112/api/StudentLogin", user)
      .then((response) => {
        console.log(response);
        const { token, user: userLogin } = response;
        sessionStorage.setItem("authUser", JSON.stringify(response.data));
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        const tokenObj = { accessToken: token }; // Token Obj
        const validUserObj = { ...userLogin, ...tokenObj }; // validUser Obj
        // dispatch(loginSuccess(userLogin));
        history("/home");
        resolve([200, validUserObj]);
      })
      .catch((e) => {
        console.error(e);
        dispatch(errorMessage(e.response.data.message));
      });
  });
};
export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    // let fireBaseBackend = getFirebaseBackend();
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }
  } catch (error) {
    // dispatch(apiError(error));
  }
};

// export const socialLogin = (type, history) => async (dispatch) => {
//   try {
//     let response;

//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       // const fireBaseBackend = getFirebaseBackend();
//       response = fireBaseBackend.socialLoginUser(type);
//     }
//     //  else {
//     //   response = postSocialLogin(data);
//     // }

//     const socialdata = await response;
//     if (socialdata) {
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       dispatch(loginSuccess(response));
//       history("/dashboard");
//     }
//   } catch (error) {
//     dispatch(apiError(error));
//   }
// };

// export const resetLoginFlag = () => async (dispatch) => {
//   try {
//     const response = dispatch(reset_login_flag());
//     return response;
//   } catch (error) {
//     dispatch(apiError(error));
//   }
// };
