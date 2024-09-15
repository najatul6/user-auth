import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

const Layout = () => {
  return (
    <div className="text-white">
        <Headers/>
      <Outlet />
    </div>
  );
};

export default Layout;
