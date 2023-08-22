import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import Layout from '../Pages/Layout'
import ErrorPage from '../Pages/ErrorPage'

import '../index.css'
import AboutUsRoute from './AboutUsRoutes'
import AnimalAdminRoute from './AnimalAdministrationRoutes'
import LoginRoute from "./SignInRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      AboutUsRoute,
      AnimalAdminRoute,
      LoginRoute,
    ],
  },
])

export default router