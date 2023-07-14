import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUser } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../context/AuthContext";

function Nav() {
  const { isAuthenticated } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
    setName(userInfo.name);
  }, [isAuthenticated]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center px-4">
            <img src='./assets/logo-header.png' alt='logo-nav-bar' width={40} height={40} />
            <span className="text-white text-lg ml-4 lg:text-2xl hidden display-block"><span className="font-bold">Guillaume </span><span className="font-regular">portfolio</span></span>
          </NavLink>
          <div className="flex md:order-2">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-500" : "" + "block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-500" : "" + "block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"}>
                    About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-500" : "" + "block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"}>
                    Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-500" : "" + "block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"}>
                    Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-500" : "" + "block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"}>
                    Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-500" : "" + "block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"}>
                    {name ?? "Profile"} <FontAwesomeIcon icon={faUser} className="text-white ml-2" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
