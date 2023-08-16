import { Outlet } from "react-router-dom";
import NavbarCom from "../../Components/NavbarCom/NavbarCom";

const Layout = () => (
  <div className="Layout">
    <NavbarCom />
    <Outlet />
  </div>
);

export default Layout;

