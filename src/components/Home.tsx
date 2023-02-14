import { Link } from "react-router-dom";

function Home() {

    return (
    <div className="flex xl:flex-row flex-col items-center justify-center">
        <img src="/assets/globe-homepage.png" alt="globe-homepage" />
        <div className="flex flex-col text-white gap-2 xl:w-2/5 w-4/5">
            <span className="text-2xl">Front-end developer</span>
            <span className="text-5xl font-bold">Guillaume Paris</span>
            <span className="text-xl text-justify mt-4">Hi there ! I'm a Epitech student at the Nancy campus. I'm currently in my 3rd year of studies. In my professional experiences, I have worked with frameworks such as React or Angular. That's why I use them to make my own portfolio!</span>
            <div className="flex flex-row flex-wrap sm:justify-start justify-center gap-5 mt-4 mb-10">
                <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full border-slate-500 border-2">
                    <Link to="/about">About</Link>
                </button>
                <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full border-slate-500 border-2">
                    <Link to="/projects">Projects</Link>
                </button>
                <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full border-slate-500 border-2">
                    <Link to="/resume">Resume</Link>
                </button>
                <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full border-slate-500 border-2">
                    <Link to="/contact">Contact</Link>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Home;