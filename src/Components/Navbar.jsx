import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";
function Navbar() {
  return (
    <nav className="fixed inset-x-0 bottom-0  py-5  bg-stone-950 ">
      <ul className="  flex justify-center items-center">
        <li>
          <NavLink
            to="/"
            className="text-5xl transition ease-in-out duration-700  text-pink-100  font-semibold "
          >
            <div className="navbarrr rounded-full p-6">
              <HiOutlineHome />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className="text-4xl transition ease-in-out duration-700   text-pink-100  font-semibold "
          >
            <div className="navbarrr rounded-full p-6">
              <FaUserLarge />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className="text-4xl transition ease-in-out duration-700   text-pink-100 hover:text-pink-700 font-semibold "
          >
            <div className="navbarrr rounded-full p-6">
              <HiOutlineViewGrid />
            </div>
          </NavLink>
        </li>
     
        <li>
          <NavLink
            to="experience"
            className="text-5xl transition ease-in-out duration-700   text-pink-100 hover:text-pink-700 font-semibold "
          >
            <div className="navbarrr rounded-full p-6">
              <HiOutlineBriefcase />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className="text-5xl transition ease-in-out duration-700   text-pink-200 hover:text-pink-700 font-semibold "
          >
            <div className="navbarrr rounded-full p-6">
              <HiOutlineChat />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
