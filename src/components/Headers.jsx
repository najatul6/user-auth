import { Link, NavLink } from "react-router-dom";

const Headers = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-600 text-xl" : "mx-4 text-xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-600 text-xl" : "mx-4 text-xl"
        }
      >
        Login/Register
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-4 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          User Auth
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">{links}</ul>
      </div>
    </div>
  );
};

export default Headers;
