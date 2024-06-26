import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import ManageAdmin from "../pages/ManageAdmin";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/Profile/ChangePassword";
import ManageCategory from "../pages/ManageCategory";
import ManageFleets from "../pages/ManageFleets";
import Settings from "../pages/Profile/Settings";

const routerAdmin = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/manage-admin" element={<ManageAdmin />}></Route>
        <Route path="/manage-category" element={<ManageCategory />}></Route>
        <Route path="/manage-fleets" element={<ManageFleets />}></Route>
      </Route>
    </>
  )
);

const Router = () => {
  return (
    <div>
      <RouterProvider router={routerAdmin} />
    </div>
  );
};

export default Router;
