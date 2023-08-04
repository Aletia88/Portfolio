// import {photo} from 'photo.jpg'
import "./App.css";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";

import { Link } from "react-scroll";

function App() {
  return (
    <div className="lg:flex w-[92%] md:w-[85%] lg:w-full font-Poppins p-6 lg:m-0 md:m-24">
      <div className="lg:w-1/2 w-full  lg:fixed lg:mt-36 lg:ml-[9%]">
        <h1 className="lg:text-[280%] md:text-5xl lg:mr-[2%] text-[32px] font-bold w-full ">
          Samrawit Girma
        </h1>
        <h2 className=" text-xl lg:pt-0 ">Full-Stack Web Developer</h2>
        <p className="md:w-[65%] leading-loose pt-4 lg:pt-0">
        Proficient  in full-stack web development, delivering intuitive user interfaces, efficient databases, API integration, and responsive design.{" "}
        </p>
        <ul className="mt-16 lg:block hidden  ">
          <li className="sticky top-0 my-2 cursor-pointer duration-200 li">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass="textWhite" // Change the text color to white when active
              spy={true} // Enable scrolling spy
            >
           About
            </Link>
          </li>
          <li className="my-2 li cursor-pointer duration-200">
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              activeClass="textWhite" // Change the text color to white when active
              spy={true} // Enable scrolling spy
            >
              Skills
            </Link>
          </li>
          <li className="my-2 li cursor-pointer duration-200">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              activeClass="textWhite" // Change the text color to white when active
              spy={true} // Enable scrolling spy
            >
              Projects
            </Link>
          </li>
        </ul>
        <ul className="flex mt-10 lg:mt-16 ml-4 gap-5 w-1/2">
          <li className="duration-200">
            <a href="https://github.com/Aletia88" target="blank">
              <AiFillGithub size={35}></AiFillGithub>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Aletia88" target="blank">
              <BsTwitter size={30}></BsTwitter>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/samrawit-girma-b57b78243/ "
              target="blank"
            >
              <BsLinkedin size={30}></BsLinkedin>
            </a>
          </li>
          <li>
            <a href="https://t.me/Nillionaire_0" target="blank">
              <FaTelegram size={30}></FaTelegram>
            </a>
          </li>
        </ul>
      </div>
      <div className="right lg:w-1/2  relative lg:left-[50%] ">
        <p className="leading-8 pt-36 lg:pr-36 " id="about">
        <h1 className="mt-24 lg:hidden block text-white text-lg w-full bg-transparent py-2 sticky top-0 z-10 bg-gray ">About</h1>
           
          Skilled website developer with a passion for creating visually
          appealing and userfriendly websites. Proficient in
          <span className="text-white"> front-end</span> and
          <span className="text-white"> back-end web development</span>,
          utilizing HTML, CSS, JavaScript, and Node.js. <br /> <br /> Strong
          problem-solving abilities, with a keen eye for detail and a commitment
          to writing clean and efficient code. Proven ability to collaborate
          with clients and stakeholders to understand their requirements and
          deliver high-quality, customized web solutions.
          <span className="text-white">
            Excited to contribute creativity and technical expertise to develop
            websites.
          </span>
        </p>
        <div id="skills" className="pr-[9%] ">
          <h1 className="mt-24 lg:hidden block text-white text-xl  w-full bg-transparent py-2 sticky top-0 z-10 bg-gray ">
            Skills
          </h1>
        

          <ul className="ml-[15%] lg:ml-0 lg:pt-24 lg:flex lg:flex-wrap gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">html</p>
    </div>
    <img src="html-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">CSS</p>
    </div>
    <img src="css-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>

  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">JS</p>
    </div>
    <img src="js-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">React.js</p>
    </div>
    <img src="react-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">php</p>
    </div>
    <img src="php-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">Node.js</p>
    </div>
    <img src="node-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">tailwind</p>
    </div>
    <img src="tailwind-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">Bootstrap</p>
    </div>
    <img src="bootstrap-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">MySql</p>
    </div>
    <img src="mysql.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
  <li className="relative group w-20 h-20">
    <div className="absolute inset-0 flex items-center justify-center rounded-full  hover:opacity-100 transition-opacity duration-200">
      <p className=" px-2 py-1 rounded-full">Git</p>
    </div>
    <img src="git-logo.png" alt="HTML" className="max-h-full max-w-full rounded-full w-[55%]" /> 
  </li>
          </ul>
        </div>
        {/* Projects section */}
        <div id="projects" className=" lg:pt-36 lg:pr-36 duration-200">
        <h1 className="mt-24 lg:hidden block text-white text-lg w-full bg-transparent py-2 sticky top-0 z-10 ">Projects</h1>
          <a href="https://github.com/Aletia88/PhotoGallery2 " target="blank">
            <div className="md:flex disc md:m-4 gap-6 w-full md:p-3 rounded-lg duration-300 ">
              <img className="md:w-1/3 h-[35%]" src="photoGallery.PNG" alt="" />
              <div className="">
                <div className="flex items-center gap-1">
                  {" "}
                  <h1 className="mt-4 text-xl md:mt-0 text-md">Photo Gallery web app </h1>{" "}
                  <FiArrowUpRight size={13}></FiArrowUpRight>{" "}
                </div>
                <p className="md:text-sm">
                  {" "}
                  Created and developed an immersive photo gallery website showcasing the captivating beauty of Ethiopia. Designed to inspire exploration and appreciation through stunning imagery, the platform offers users the opportunity to explore diverse landscapes and cultures. Empowered users to contribute their own photographic works, 
                </p>
                <ul className="flex gap-2 ml-2 lang mt-2">
                  <li>html</li>
                  <li>js</li>
                  <li>tailwind</li>
                  <li>php</li>
                </ul>
              </div>
            </div>
          </a>
          <a
            href="https://the-hot-platform-login-page-dntb.vercel.app/"
            target="blank"
          >
            <div className="mt-10 md:flex disc md:m-4 gap-6 w-full md:p-3 rounded-lg duration-300 ">
              <img className="md:w-1/3 h-[35%]" src="hotp.PNG" alt="" />
              <div className="">
                <div className="flex items-center gap-2">
                  {" "}
                  <h1 className="mt-4 text-xl md:mt-0 text-md"> The Hot Platform </h1>{" "}
                  <FiArrowUpRight size={13}></FiArrowUpRight>{" "}
                </div>
                <p className="md:text-sm leading-6 ">Developed and implemented an engaging and user-friendly sign-up/sign-in page for the The Hot Platform</p>
                <ul className="flex gap-2 ml-2 lang mt-2">
                  <li>html</li>

                  <li>React.js</li>
                  <li>tailwind</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="https://the-hot-platform-professional-31lp.vercel.app/Settings" target="blank">
            <div className="mt-10 md:flex disc md:m-4 gap-6 w-full md:p-3 rounded-lg duration-300 ">
              <img className="md:w-1/3 h-[35%]" src="setting.PNG" alt="" />
              <div className="">
                <div className="flex items-center gap-2">
                  {" "}
                  <h1 className="mt-4 text-xl md:mt-0 text-md">The Hot Platform</h1>{" "}
                  <FiArrowUpRight size={13}></FiArrowUpRight>{" "}
                </div>
                <p className="md:text-sm">Developed and implemented an engaging and user-friendly setting page for the The Hot Platform.</p>
                <ul className="flex gap-2 ml-2 lang mt-2">
                  <li>html</li>

                  <li>React.js</li>
                  <li>tailwind css</li>
                </ul>
              </div>
              
            </div>
          </a>
        </div>
        <div className="flex duration-200 items-center all">

        
        <a href="https://github.com/Aletia88" className="m-8 duration-100 mr-2 hover:mr-10">View Full projects</a> <BiRightArrowAlt></BiRightArrowAlt></div>
      <div className="cont my-24 mr-36">
        <p className="text-sm">Feel free to connect with me through the provided social media links or drop me an email at <a href="mailto:youremail@example.com">SamrawitGirma31@gmail.com</a> .</p>
      </div>
      </div>
    </div>
  );
}

export default App;
