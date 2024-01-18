//Include Both Helper File with needed methods

// action
import {
  registerUserSuccessful,
  registerUserFailed,
  resetRegisterFlagChange,
  apiErrorChange
} from "./reducer";


// Is user register successfull then direct plot user in redux.
export const registerUser = (user) => async (dispatch) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      response = fireBaseBackend.registerUser(user.email, user.password);
      // yield put(registerUserSuccessful(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = postJwtRegister('/post-jwt-register', user);
      // yield put(registerUserSuccessful(response));
    } else if (process.env.REACT_APP_API_URL) {
      response = postFakeRegister(user);
      const data = await response;

      if (data.message === "success") {
        dispatch(registerUserSuccessful(data));
      } else {
        dispatch(registerUserFailed(data));
      }
    }
  } catch (error) {
    dispatch(registerUserFailed(error));
  }
};

export const resetRegisterFlag = () => {
  try {
    const response = resetRegisterFlagChange();
    return response;
  } catch (error) {
    return error;
  }
};

export const apiError = () => {
  try {
    const response = apiErrorChange();
    return response;
  } catch (error) {
    return error;
  }
};