import { combineReducers } from "redux";

import LayoutReducer from "./layouts/reducer";
// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";
import CategoryReducer from "./ArticleCategory/reducer";
import ArticleReducer from "./Article/reducer";
import MessageReducer from "./message/reducer";
import ContactUsReducer from "./ContactUs/reducer";
import CoursesReducer from "./Courses/reducer";
import facultyReducer from "./Faculty/reducer";
const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  Account: AccountReducer,
  ForgetPassword: ForgetPasswordReducer,
  Profile: ProfileReducer,
  CategoryReducer: CategoryReducer,
  Articledashboard: ArticleReducer,
  ContactUsdashboard: ContactUsReducer,
  Coursesdashboard: CoursesReducer,
  Facultydashboard: facultyReducer,
  Message: MessageReducer,
});

export default rootReducer;
