import { useState } from "react";
import { Link } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="bg-slate-800">
                <div className="flex justify-between px-2 py-3">
                    <Link to="/" className="flex items-center px-4">
                        <img src='./assets/logo-header.png' alt='logo-nav-bar' />
                        <span className="text-white text-2xl font-bold ml-4">Web</span>
                        <span className="text-white text-2xl font-regular">dev</span>
                    </Link>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <FontAwesomeIcon className="text-white" icon={faBars} />
                    </button>
                    <div className="lg:flex hidden items-center justify-between w-full max-w-md mr-4">
                        <Link to="/">
                            <span className="text-white text-xl">Home</span>
                        </Link>
                        <Link to="/about">
                            <span className="text-white text-xl">About</span>
                        </Link>
                        <Link to="/projects">
                            <span className="text-white text-xl">Projects</span>
                        </Link>
                        <Link to="/resume">
                            <span className="text-white text-xl">Resume</span>
                        </Link>
                        <Link to="/contact">
                            <span className="text-white text-xl">Contact</span>
                        </Link>
                    </div>
                </div>
                {navbarOpen && 
                    <div className={"flex flex-col justify-end items-end px-4 pb-4 gap-2 transition duration-300 ease-in-out" + (navbarOpen ? " translate-y-0" : " translate-y-full")}>
                        <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <span className="text-white text-xl">Home</span>
                        </Link>
                        <Link to="/about" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <span className="text-white text-xl">About</span>
                        </Link>
                        <Link to="/projects" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <span className="text-white text-xl">Projects</span>
                        </Link>
                        <Link to="/resume" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <span className="text-white text-xl">Resume</span>
                        </Link>
                        <Link to="/contact" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <span className="text-white text-xl">Contact</span>
                        </Link>
                    </div>
                }
            </nav>
      </>
    );
};

export default Navbar;