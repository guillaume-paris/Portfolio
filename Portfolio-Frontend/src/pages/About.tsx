import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import { faBook, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pwcLogo from "../assets/pwc_logo.jpg";
import immopadLogo from "../assets/immopad_logo.jpeg";
import dennemeyerLogo from "../assets/dennemeyer_logo.png";

const About = () => {
    return (
        <div className="h-screen pt-24 flex flex-col items-center">
            <span className="text-white text-4xl font-bold p-5 underline-offset-4 underline">About me ? my carrer :</span>
            <ol className="relative border-l-4 border-gray-700 m-10">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-4 h-4 rounded-full -left-2.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mt-10 mb-1 text-lg font-normal leading-none text-gray-500">2019 - 2020</time>
                    <h3 className="text-2xl font-semibold text-white">Bachelor of Science</h3>
                    <p className="mb-4 text-xl font-normal text-gray-400">With a specialization in Digital Science (French baccalaureate)</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-4 h-4 rounded-full -left-2.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-500">2020 - 2025</time>
                    <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-white my-2">
                        <img width={60} height={60} className="rounded-xl" src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/246410252_10158041328906116_2106638515716593300_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fPpsbsLhCIYAX-7fuYY&_nc_ht=scontent-cdg4-2.xx&oh=00_AfCdan8ypSXaASVpX1OGjnlWf-Oq37uV2RYYuLDyp5L46w&oe=64CDEEDE"/>
                        EPITECH - European Institute of Technology
                    </h3>
                    <p className="mb-4 text-xl font-normal text-gray-400">Expert Diploma in Information Technology, Computer Programming</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-4 h-4 rounded-full -left-2.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-500">2021</time>
                    <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-white my-2">
                        <img width={60} height={60} className="rounded-xl" src={pwcLogo} alt="pwc-logo"/>
                        Software Developer Intern at PwC
                    </h3>
                    <h3 className="text-2xl font-semibold text-white"></h3>
                    <p className="mb-4 text-xl font-normal text-gray-400"><FontAwesomeIcon icon={faHourglass} /> 6 month internship <FontAwesomeIcon icon={faBook} /> React <FontAwesomeIcon icon={faLocationDot} /> Howald, Luxembourg</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-4 h-4 rounded-full -left-2.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-500">2022</time>
                    <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-white my-2">
                        <img width={60} height={60} className="rounded-xl" src={immopadLogo} alt="immopad-logo"/>
                        Software Developer Intern at Immopad
                    </h3>
                    <h3 className="text-2xl font-semibold text-white"></h3>
                    <p className="mb-4 text-xl font-normal text-gray-400"><FontAwesomeIcon icon={faHourglass} /> 6 month part-time internship <FontAwesomeIcon icon={faBook} /> Angular <FontAwesomeIcon icon={faLocationDot} /> Nancy, France</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-4 h-4 rounded-full -left-2.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-500">2023</time>
                    <h3 className="flex flex-row items-center gap-4 text-2xl font-semibold text-white my-2">
                        <img width={60} height={60} className="rounded-xl" src={dennemeyerLogo} alt="dennemeyer-logo"/>
                        Software Developer Intern at Dennemeyer
                    </h3>
                    <h3 className="text-2xl font-semibold text-white"></h3>
                    <p className="mb-4 text-xl font-normal text-gray-400"><FontAwesomeIcon icon={faHourglass} /> 4 month internship <FontAwesomeIcon icon={faBook} /> Angular and ASP.NET Core <FontAwesomeIcon icon={faLocationDot} /> Howald, Luxembourg</p>
                </li>
            </ol>
        </div>
    );
}

export default About;