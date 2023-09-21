import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Layout from "../Pages/Layout";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import AnimalAdministration from "../Pages/AnimalAdministration";
import AddAnimal from "../Pages/AddAnimal";
import LogIn from "../Pages/LogIn";
import AnimalAdoption from "../Pages/AnimalAdoption";
import EditAnimal from "../Pages/EditAnimal";

import "../index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <AboutUs />,
      },
      {
        path: "/adoption",
        element: <AnimalAdoption />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/admin",
        element: (
          <CheckLogin
            LoggedIn={<AnimalAdministration />}
            LoggedOut={<LogIn />}
          />
        ),
      },
      {
        path: "/add",
        element: <CheckLogin LoggedIn={<AddAnimal />} LoggedOut={<LogIn />} />,
      },
      {
        path: "/edit/:id",
        element: <CheckLogin LoggedIn={<EditAnimal />} LoggedOut={<LogIn />} />,
      },

    ],
  },
]);

function CheckLogin({ LoggedIn, LoggedOut }) {
  const jwtToken = localStorage.getItem("jwtToken");

  if (jwtToken) {
    try {
      const decodedToken = jwt_decode(jwtToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        return <Navigate to="/login" replace />;
      } else {
        return LoggedIn;
      }
    } catch (error) {
      return <Navigate to="/login" replace />;
    }
  } else {
    return LoggedOut;
  }
}

export default router;
