import React from 'react';
import { FaSearch, FaBell, FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { RiGlobalLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { MdOutlineTextsms } from "react-icons/md";
import { FiMaximize2 } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

function Header({ setIsSidebarOpen }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
          <FaBars className="text-2xl" />
        </button>
        <nav className="flex space-x-4">
          <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">Dashboard <IoIosArrowDown /></a>
          <hr className='w-[2px] h-[10px] text-black flex items-center border bg-black'/>
          <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">Application <IoIosArrowDown /></a>
          <hr/>
          <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">More Pages <IoIosArrowDown /></a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" className="px-3 backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300" placeholder="Search..." />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="absolute text-gray-500" />
          </div>
        </div>
        <IoMoonOutline className="text-gray-700 hover:text-blue-600 cursor-pointer" />
        <GoBell className="text-gray-700 hover:text-blue-600 cursor-pointer" />
        <MdOutlineTextsms className="text-gray-700 hover:text-blue-600 cursor-pointer" />
        <FiMaximize2 className="text-gray-700 hover:text-blue-600 cursor-pointer" />
        <RiGlobalLine className="text-gray-700 hover:text-blue-600 cursor-pointer" />
        <CgProfile className="text-gray-700 hover:text-blue-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
