import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="text-white">
        <Headers/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
