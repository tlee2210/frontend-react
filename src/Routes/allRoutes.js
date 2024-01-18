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
//ContactUs
import ContactUs from "../dashboard/pages/ContactUs/index";

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
];
export { AdminProtectedRoutes, authProtectedRoutes, publicRoutes, publicHome };
