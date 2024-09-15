import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 min-h-screen text-white">
      <Outlet />
    </div>
  );
};

export default Layout;
