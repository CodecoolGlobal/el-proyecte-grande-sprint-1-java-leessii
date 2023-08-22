import { Outlet } from "react-router-dom";
import NavbarCom from "../../Components/NavbarCom/NavbarCom";
import React from 'react'
import {Button} from '@mui/material'

const Layout = () => (
  <div className="Layout">
    <Outlet/>
  </div>
);

export default Layout;

