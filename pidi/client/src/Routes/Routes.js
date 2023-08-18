import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import Layout from '../Pages/Layout'
import ErrorPage from '../Pages/ErrorPage'

import '../index.css'
import AboutUsRoute from './AboutUsRoutes'
import AnimalAdminRoute from './AnimalAdministrationRoutes'
import AnimalAdoption from './AnimalAdoption'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      AboutUsRoute,
      AnimalAdminRoute,
      AnimalAdoption
    ],
  },
])

export default router