import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faUser as faUser } from "@fortawesome/free-regular-svg-icons";

function Nav() {

  const [name, setName] = useState(localStorage.getItem("name") || "");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-zinc-800 fixed w-screen">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center px-4">
                    <img src='./assets/logo-header.png' alt='logo-nav-bar' width={40} height={40} />
                    <span className="text-white text-2xl font-bold ml-4">Web</span>
                    <span className="text-white text-2xl font-regular">dev</span>
                </Link>
              </div>
              <div className="hidden md:flex md:justify-end">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      <span>
                          Home
                      </span>
                  </Link>
                  <Link to="/about" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      <span>
                          About
                      </span>
                  </Link>
                  <Link to="/projects" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      <span>
                          Projects
                      </span>
                  </Link>
                  <Link to="/resume" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      <span>
                          Resume
                      </span>
                  </Link>
                  <Link to="/contact" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      <span>
                          Contact
                      </span>
                  </Link>
                  <Link to="/profile" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      <span>
                        {name}<FontAwesomeIcon icon={faUser} className="text-white mx-2" />
                      </span>
                  </Link>
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <>
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)} >
                  <span>
                      Home
                  </span>
              </Link>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)} >
                  <span>
                      About
                  </span>
              </Link>
              <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)} >
                  <span>
                      Projects
                  </span>
              </Link>
              <Link to="/resume" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)} >
                  <span>
                      Resume
                  </span>
              </Link>
              <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)} >
                  <span>
                      Contact
                  </span>
              </Link>
              <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)} >
                  <span>
                    {name}<FontAwesomeIcon icon={faUser} className="text-white mx-2" />
                  </span>
              </Link>
            </div>
          </div>
        </>
      </nav>

      
    </>
  );
}

export default Nav;