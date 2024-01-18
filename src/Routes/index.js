import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../dashboard/Layouts/NonAuthLayout";
// import VerticalLayout from "../Layouts/index";
import VerticalLayout from "../dashboard/Layouts/index";

//routes
import {
  AdminProtectedRoutes,
  authProtectedRoutes,
  publicRoutes,
  publicHome,
} from "./allRoutes";
import { AdminProtected, AccessRoute, AuthProtected } from "./AuthProtected";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* login */}
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AccessRoute>
                  <NonAuthLayout>{route.component}</NonAuthLayout>
                </AccessRoute>
              }
              key={idx}
              exact={true}
            />
          ))}
        </Route>

        {/* home page */}
        <Route>
          {publicHome.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              exact={true}
            />
          ))}
        </Route>

        {/* dashboard */}
        <Route>
          {AdminProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AdminProtected>
                  <VerticalLayout>{route.component}</VerticalLayout>
                </AdminProtected>
              }
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
