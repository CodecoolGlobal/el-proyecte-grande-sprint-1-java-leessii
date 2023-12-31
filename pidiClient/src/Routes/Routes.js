import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import Layout from '../Pages/Layout'
import ErrorPage from '../Pages/ErrorPage'

import '../index.css'
import AboutUsRoute from './AboutUsRoutes'
import AnimalAdminRoute from './AnimalAdministrationRoutes'
import AnimalAdoption from './AnimalAdoptionRoutes'
import AddAnimalRoute from './AddAnimalRoutes'
import LoginRoute from "./SignInRoutes"
import RegistrationRoute from "./RegistrationRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      AboutUsRoute,
      AnimalAdminRoute,
      AnimalAdoption,
      AddAnimalRoute,
        RegistrationRoute,
      LoginRoute,
    ],
  },
])

export default router