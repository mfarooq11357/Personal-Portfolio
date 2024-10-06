import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ReactTyped } from 'react-typed';


function Home() {
  return (
    <div className="  md:w-4/5 h-screen mx-auto flex flex-col-reverse md:flex-row  items-center  ">
      <div className="margin-text-main md:w-3/5 flex flex-col justify-center items-center md:items-start">
        <p className="text-pink-50 flex flex-col justify-center items-center md:items-start ">
          <p className="text-xl md:text-3xl">Hi, It's me</p> <br />
          <div>
            <h1 className="text-pink-50 text-4xl md:text-6xl mb-5 md:mb-6 ">
              Muhammad Farooq
            </h1>
          </div>
          {/* <p className="text-3xl md:text-6xl text-pink-200">
            Frontend Web Developer
          </p> */}
                  <div>
            <ReactTyped
                strings={['Frontend Web Developer', 'Backend Web Developer','UI/UX Designer']}
                typeSpeed={50}         // Typing speed
                backSpeed={50}         // Backspacing speed
                loop={true}            // Loop through the strings
                className="text-3xl md:text-6xl text-show" // Your specified class names
            />
        </div>
          <br />
          <p className="text-xl md:text-3xl">Who is,</p>
          <p className="text-2xl md:text-4xl">always learning and growing.</p>
        </p>
        <div>
          <ul className="flex flex-row justify-start align-middle mt-12 ">
            <li className=" random border p-1 md:p-3 mx-3 cursor-pointer  rounded-full transition ease-in-out duration-500 ">
              <Link to="https://www.linkedin.com/in/muhammad-farooq-b67b1727a">
                <FaLinkedinIn className="text-pink-100 text-xl md:text-4xl" />
              </Link>
            </li>
            <li className="random border p-1 md:p-3 mx-3 cursor-pointer  rounded-full transition ease-in-out duration-500 ">
              <Link to="https://github.com/mfarooq11357/">
                <FaGithub className="text-pink-100 text-xl md:text-4xl " />
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=%2B923427561758&text&type=phone_number&app_absent=0",
              "_blank"
            )
          }
          className="button-properties px-10 md:px-24 py-2 md:py-5 mt-11 rounded-md text-xl md:text-3xl transition ease-in-out duration-700"
        >
          Contact Me
        </button>
      </div>
      <div className="picture-width mx-auto md:w-2/5 rounded-lg  md:inline">
        <img
          src={"https://i.ibb.co/SByccbV/IMG.jpg"}
          alt="first image"
          className=" rounded-lg shadow-lg shadow-pink-200/30 "
        />
      </div>
    </div>
  );
}

export default Home;
