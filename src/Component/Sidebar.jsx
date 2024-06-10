import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHome, faProjectDiagram, faFileAlt, faTasks, faShoppingCart, faEnvelope, faComments, faUsers, faBookmark } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false);
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col w-64 h-screen bg-gray-800 border-r dark:bg-gray-900 dark:border-gray-700`}>
      <div className='flex justify-between items-center px-4 py-6'>
        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
          <AiOutlineClose className="text-2xl text-white" />
        </button>
        <h2 className="text-3xl font-semibold text-white md:block hidden">Tivo</h2>
        <AiOutlineAppstore className='bg-[#2a2b41] rounded-md w-[40px] h-[30px] text-white' />
      </div>
      <hr className='w-[100%]' />
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex flex-col mt-6 space-y-1">
          <h3 className='text-white px-4'>PINNED</h3>
          <div>
            <button onClick={() => setIsDashboardOpen(!isDashboardOpen)} className="flex items-center justify-between w-full px-4 py-2 text-white rounded-md dark:bg-gray-700">
              <div className="flex items-center group">
                <FontAwesomeIcon icon={faHome} className="text-white group-hover:text-blue-600" />
                <span className="mx-4 font-medium group-hover:text-blue-600">Dashboard</span>
              </div>
              {isDashboardOpen ? <FaAngleDown className="text-white group-hover:text-blue-600" /> : <FaAngleRight className="text-white group-hover:text-blue-600" />}
            </button>
            {isDashboardOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link to='/default' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
                  <MdOutlineHorizontalRule />
                  <span className="mx-4 font-medium">Default</span>
                </Link>
                <Link to='/dashboard/ecommerce' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
                  <MdOutlineHorizontalRule />
                  <span className="mx-4 font-medium">Ecommerce</span>
                </Link>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => setIsWidgetsOpen(!isWidgetsOpen)} className="flex items-center justify-between w-full px-4 py-2 text-white rounded-md dark:bg-gray-700">
              <div className="flex items-center group">
                <FontAwesomeIcon icon={faChartBar} className="text-white group-hover:text-blue-600" />
                <span className="mx-4 font-medium group-hover:text-blue-600">Widgets</span>
              </div>
              {isWidgetsOpen ? <FaAngleDown className="text-white group-hover:text-blue-600" /> : <FaAngleRight className="text-white group-hover:text-blue-600" />}
            </button>
            {isWidgetsOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link to='/widgets/general' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
                  <MdOutlineHorizontalRule />
                  <span className="mx-4 font-medium">General</span>
                </Link>
                <Link to='/widgets/chart' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
                  <MdOutlineHorizontalRule />
                  <span className="mx-4 font-medium">Chart</span>
                </Link>
              </div>
            )}
          </div>
          <Link to='/project' className="flex items-center justify-between px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <div>
              <FontAwesomeIcon icon={faProjectDiagram} className="text-white hover:text-blue-600" />
              <span className="mx-4 font-medium">Project</span>
            </div>
            <FaAngleRight />
          </Link>
          <Link to='/file-manager' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <FontAwesomeIcon icon={faFileAlt} className="text-white hover:text-blue-600" />
            <span className="mx-4 font-medium">File Manager</span>
          </Link>
          <Link to='/kanban-board' className="flex items-center justify-between px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <div>
              <FontAwesomeIcon icon={faTasks} className="text-white hover:text-blue-600" />
              <span className="mx-4 font-medium">Kanban Board</span>
            </div>
            <FaAngleRight />
          </Link>
          <div>
            <button onClick={() => setIsEcommerceOpen(!isEcommerceOpen)} className="flex items-center justify-between w-full px-4 py-2 text-white rounded-md dark:bg-gray-700">
              <div className="flex items-center group">
                <FontAwesomeIcon icon={faShoppingCart} className="text-white group-hover:text-blue-600" />
                <span className="mx-4 font-medium group-hover:text-blue-600">Ecommerce</span>
              </div>
              {isEcommerceOpen ? <FaAngleDown className="text-white group-hover:text-blue-600" /> : <FaAngleRight className="text-white group-hover:text-blue-600" />}
            </button>
            {isEcommerceOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link to='/products' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
                  <span className="mx-4 font-medium">Products</span>
                  <FaAngleRight />
                </Link>
                <Link to='/orders' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
                  <span className="mx-4 font-medium">Orders</span>
                  <FaAngleRight />
                </Link>
              </div>
            )}
          </div>
          <Link to='/email' className="flex items-center justify-between px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-blue-600" />
              <span className="mx-4 font-medium">Email</span>
            </div>
            <FaAngleRight />
          </Link>
          <Link to='/chat' className="flex items-center justify-between px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <div>
              <FontAwesomeIcon icon={faComments} className="text-white hover:text-blue-600" />
              <span className="mx-4 font-medium">Chat</span>
            </div>
            <FaAngleRight />
          </Link>
          <Link to='/users' className="flex items-center justify-between px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <div>
              <FontAwesomeIcon icon={faUsers} className="text-white hover:text-blue-600" />
              <span className="mx-4 font-medium">Users</span>
            </div>
            <FaAngleRight />
          </Link>
          <Link to='/bookmarks' className="flex items-center px-4 py-2 text-white rounded-md dark:text-white hover:text-blue-600">
            <FontAwesomeIcon icon={faBookmark} className="text-white hover:text-blue-600" />
            <span className="mx-4 font-medium">Bookmarks</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
