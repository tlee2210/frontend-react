import { combineReducers } from "redux";

import LayoutReducer from "./layouts/reducer";
// Authentication
import LoginReducer from "./auth/login/reducer";
// import AccountReducer from "./auth/register/reducer";
// import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
// import ProfileReducer from "./auth/profile/reducer";
import CategoryReducer from "./ArticleCategory/reducer";
import ArticleReducer from "./Article/reducer";
import MessageReducer from "./message/reducer";
import ContactUsReducer from "./ContactUs/reducer";
import CoursesReducer from "./Courses/reducer";
import facultyReducer from "./Faculty/reducer";
import DepartmentReducer from "./Department/reducer";
import FacilitiesReducer from "./Facilities/reducer";
import StaffReducer from "./Staff/reducer";
import SessionReducer from "./Session/reducer";
import AdmissionReducer from "./Admission/reducer";
import StudentsReducer from "./Student/reducer";
import ProfileReducer from "./profile/reducer";
import SemesterReducer from "./Semester/reducer";
import HomeReducer from "./home/home/reducer";
import HomeFacilitiesReducer from "./home/facilities/reducer";
import HomenewsReducer from "./home/news/reducer";
import HomecoursesReducer from "./home/courses/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  // ForgetPassword: ForgetPasswordReducer,
  // dashboard
  Profile: ProfileReducer,
  CategoryReducer: CategoryReducer,
  Articledashboard: ArticleReducer,
  ContactUsdashboard: ContactUsReducer,
  Coursesdashboard: CoursesReducer,
  Facultydashboard: facultyReducer,
  Facilitiesdashboard: FacilitiesReducer,
  Departmentdashboard: DepartmentReducer,
  Staffdashboard: StaffReducer,
  Studentsdashboard: StudentsReducer,
  Sessiondashboard: SessionReducer,
  Admissiondashboard: AdmissionReducer,
  Semesterdashboard: SemesterReducer,
  //home
  Home: HomeReducer,
  Facilities: HomeFacilitiesReducer,
  New: HomenewsReducer,
  Courses: HomecoursesReducer,
  //Message
  Message: MessageReducer,
});

export default rootReducer;
