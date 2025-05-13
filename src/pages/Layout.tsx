import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-200 ">
      <Navbar />
      <div className="px-10 bg-gradient-to-r from-white to-gray-200 ">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
