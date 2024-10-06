import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="flex flex-col justify-center items-center  h-screen">
      <div className="  flex mb-48 flex-col justify-center items-center ">
        <div className="flex justify-center items-center mb-20">
          <HiOutlinePhone className=" random1  text-3xl mr-3" />
          <span className="text-pink-50 text-3xl">(+92) 3427561758</span>
        </div>
        <div className="flex justify-center items-center mb-20">
          <HiOutlineMail className=" random1 text-3xl mr-3" />
          <span className="text-pink-50 text-3xl">mfarooq11357@gmail.com</span>
        </div>
        <div className="flex justify-center items-center mb-20">
          <HiOutlineLocationMarker className=" random1  text-3xl mr-3" />
          <span className="text-pink-50 text-3xl">Pakistan, Punjab, Gujrat</span>
        </div>
        <div>
          <ul className="flex flex-row justify-start align-middle mt-12 ">
            <li className=" random border p-1 md:p-3 mx-3 cursor-pointer  rounded-full transition ease-in-out duration-500">
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
      </div>
    </div>
  );
}

export default Contact;
