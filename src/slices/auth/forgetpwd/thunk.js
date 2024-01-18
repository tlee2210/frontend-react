import { userForgetPasswordSuccess, userForgetPasswordError } from "./reducer"

export const userForgetPassword = (user, history) => async (dispatch) => {
  try {
      let response;
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {

          response = fireBaseBackend.forgetPassword(
              user.email
          )

      } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
          response = postJwtForgetPwd(
              user.email
          )
      } else {
          response = postFakeForgetPwd(
              user.email
          )
      }

      const data = await response;

      if (data) {
          dispatch(userForgetPasswordSuccess(
              "Reset link are sended to your mailbox, check there first"
          ))
      }
  } catch (forgetError) {
      dispatch(userForgetPasswordError(forgetError))
  }
}