import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast("Log Out Success!");
    });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const menu = ["Home", "Team", "Features", "Blog", "About", "Contact"];

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-[#213343] min-h-[70px] tracking-wide relative z-[100]">
     <ToastContainer position="top-center" autoClose={1500} />
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link to="/" className="lg:text-3xl">
          User Auth
        </Link>

        {/* Desktop Menu for Large/Medium Screens */}
        <nav className="hidden lg:flex space-x-6">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FFA726]"
                  : "hover:text-[#FFA726] block font-semibold text-[15px] text-white"
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Login/Sign-up Buttons */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <div className="rounded-full border border-[#FFA726] overflow-hidden">
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Profile picture"
                    className="w-10 h-10 object-center flex justify-center items-center"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow space-y-2"
              >
                <li className="text-xl font-bold uppercase text-[#FFA726] text-center">
                  {user?.displayName}
                </li>
                <li>{user?.email}</li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-error btn-outline mt-10"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex space-x-3">
              <NavLink to="/login">
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#FFA726] bg-[#FFA726] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#FFA726]">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#FFA726] bg-[#FFA726] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#FFA726]">
                  Sign up
                </button>
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={handleClick}>
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu - Conditionally Render */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-[#213343] bg-opacity-50 z-[100]"
            onClick={handleClick} // Close when clicking outside
          >
            <ul
              className="fixed max-lg:bg-[#213343] max-lg:w-1/2 max-lg:min-w-[250px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md z-50 space-y-3"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <li className="mb-6 hidden max-lg:block">
                <Link to="/" className="text-3xl text-white">
                  User Auth
                </Link>
              </li>
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="max-lg:border-b border-gray-300 max-lg:py-3 px-3"
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FFA726]"
                        : "hover:text-[#FFA726] block font-semibold text-[15px] text-white"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Headers;
