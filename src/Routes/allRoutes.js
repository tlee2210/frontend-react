import React from "react";
import { Navigate } from "react-router-dom";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

//home page
import HomePage from "../home/pages/home/home";
//contact page
import ContactUsPage from "../home/pages/AboutUs/ContactUs";
//Course Page
import CoursesPage from "../home/pages/Courses/CoursesPage";
//Find A Sourse Page
import FindASource from "../home/pages/FindASource/FindASource";
//Under Graduate Page
import UnderGraduatePage from "../home/pages/UnderGraduate/UnderGraduatePage";
//New Page
import NewsPage from "../home/pages/News/NewsPage";
//New Details Page
import NewDetailsPage from "../home/pages/News/NewsDetailsPage";
//Facilities
import FacilitiesPage from "../home/pages/Facilities/FacilitiesPage";

//Admin pages
import Courses from "../dashboard/pages/Courses/index";
import Category from "../dashboard/pages/Article/Category/index";

// Article
import Article from "../dashboard/pages/Article/Article/index";
import CreateArticle from "../dashboard/pages/Article/Article/create";
import EditArticle from "../dashboard/pages/Article/Article/edit";
//faculty
import Faculty from "../dashboard/pages/Faculty/index";
import FacultyCreate from "../dashboard/pages/Faculty/create";
import FacultyEdit from "../dashboard/pages/Faculty/edit";
//facilities
import Facilities from "../dashboard/pages/facilities/index";
import FacilitiesCreate from "../dashboard/pages/facilities/create";
import FacilitiesEdit from "../dashboard/pages/facilities/edit";
//student
import Student from "../dashboard/pages/Student/index";
import StudentCreate from "../dashboard/pages/Student/create";
import StudentEdit from "../dashboard/pages/Student/edit";
// staff
import Staff from "../dashboard/pages/staff/index";
import StaffCreate from "../dashboard/pages/staff/create";
import StaffEdit from "../dashboard/pages/staff/edit";
//ContactUs
import ContactUs from "../dashboard/pages/ContactUs/index";
// department
import Departments from "../dashboard/pages/Department/index";
import DepartmentCreate from "../dashboard/pages/Department/create";
import DepartmentEdit from "../dashboard/pages/Department/edit";
// session
import Sessions from "../dashboard/pages/session/index";
// Admission Proccess
import AdmissionProccess from "../dashboard/pages/Admission/AdmissionProccess";
import AdmissionAccept from "../dashboard/pages/Admission/AdmissionAccept";
import AdmissionReject from "../dashboard/pages/Admission/AdmissionReject";
import AdmissionDetail from "../dashboard/pages/Admission/AdmissionDetail";
//404 pages
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";
import Cover404 from "../pages/AuthenticationInner/Errors/Cover404";
import Alt404 from "../pages/AuthenticationInner/Errors/Alt404";
import Error500 from "../pages/AuthenticationInner/Errors/Error500";

const AdminProtectedRoutes = [
  { path: "/dashboard/Courses", component: <Courses /> },
  // /dashboard/article
  { path: "/dashboard/Category", component: <Category /> },
  //article
  { path: "/dashboard/article", component: <Article /> },
  { path: "/dashboard/article/create", component: <CreateArticle /> },
  { path: "/dashboard/article/:id/edit", component: <EditArticle /> },
  //ContactUs
  { path: "/dashboard/contactus", component: <ContactUs /> },
  //Faculty
  { path: "/dashboard/faculty", component: <Faculty /> },
  { path: "/dashboard/faculty/create", component: <FacultyCreate /> },
  { path: "/dashboard/faculty/:id/edit", component: <FacultyEdit /> },
  // facilities
  { path: "/dashboard/facilities", component: <Facilities /> },
  { path: "/dashboard/facilities/create", component: <FacilitiesCreate /> },
  { path: "/dashboard/facilities/:id/edit", component: <FacilitiesEdit /> },
  // Department
  { path: "/dashboard/department", component: <Departments /> },
  { path: "/dashboard/department/create", component: <DepartmentCreate /> },
  { path: "/dashboard/department/:id/edit", component: <DepartmentEdit /> },
  // student
  { path: "/dashboard/students", component: <Student /> },
  { path: "/dashboard/student/create", component: <StudentCreate /> },
  { path: "/dashboard/student/:id/edit", component: <StudentEdit /> },
  // Staff
  { path: "/dashboard/staffs", component: <Staff /> },
  { path: "/dashboard/staff/create", component: <StaffCreate /> },
  { path: "/dashboard/staff/:id/edit", component: <StaffEdit /> },
  // sessions
  { path: "/dashboard/sessions", component: <Sessions /> },
  // Admission
  { path: "/dashboard/admission/proccess", component: <AdmissionProccess /> },
  { path: "/dashboard/admission/accept", component: <AdmissionAccept /> },
  { path: "/dashboard/admission/reject", component: <AdmissionReject /> },
  { path: "/dashboard/admission/:id/detail", component: <AdmissionDetail /> },
];

const authProtectedRoutes = [
  //User Profile
  { path: "/profile", component: <UserProfile /> },
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
];

const publicHome = [
  { path: "/home", component: <HomePage /> },
  {
    path: "/",
    exact: true,
    component: <HomePage />,
  },
  { path: "*", component: <HomePage /> },
  { path: "/contact-us", component: <ContactUsPage /> },
  { path: "/courses-page", component: <CoursesPage /> },
  { path: "/courses-page/find-a-source", component: <FindASource /> },
  {
    path: "/courses-page/under-graduate-page",
    component: <UnderGraduatePage />,
  },
  {
    path: "/news",
    component: <NewsPage />,
  },
  {
    path: "/news/details",
    component: <NewDetailsPage />,
  },
  {
    path: "/facilities",
    component: <FacilitiesPage />,
  },
];
export { AdminProtectedRoutes, authProtectedRoutes, publicRoutes, publicHome };
