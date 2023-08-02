import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
    <div className="flex xl:flex-row flex-col items-center justify-center h-screen pt-20">
        <img src="/assets/globe-homepage.png" alt="globe-homepage" className="pt-44 md:pt-36 xl:pt-0"/>
        <div className="flex flex-col text-white gap-2 xl:w-2/5 w-4/5">
            <span className={`text-2xl transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} transition-all duration-700 ease-out`}>
                Front-end developer
            </span>
            <span className={`text-5xl font-bold transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '300ms' }}>
                Guillaume Paris
            </span>
            <span className={`text-xl text-justify mt-4 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '500ms' }}>
                Hi there ! I'm a Epitech student at the Nancy campus. I'm currently in my 3rd year of studies. 
                In my professional experiences, I have worked with frameworks such as React or Angular. That's why I use them to make my own portfolio!
            </span>
            <div className="flex flex-row flex-wrap sm:justify-start justify-center gap-5 mt-4 mb-10">
                <div aria-label="button-animation-01" className={`transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '0.8s' }}>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full border-gray-500 border-2">
                        <Link to="/about">About</Link>
                    </button>
                </div>
                <div aria-label="button-animation-02" className={`transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '1s' }}>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full border-gray-500 border-2">
                        <Link to="/projects">Projects</Link>
                    </button>
                </div>
                <div aria-label="button-animation-03" className={`transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '1.2s' }}>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full border-gray-500 border-2">
                        <Link to="/resume">Resume</Link>
                    </button>
                </div>
                <div aria-label="button-animation-04" className={`transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '1.4s' }}>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full border-gray-500 border-2">
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
                <div aria-label="button-animation-05" className={`transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: '1.6s' }}>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full border-gray-500 border-2">
                        <Link to="/profile">Profile</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;