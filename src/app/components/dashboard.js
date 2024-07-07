'use client';

import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'tailwindcss/tailwind.css';
import AddBlogs from './Addblogs'; 
import AllBlogs from './Allblogs'; 

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('AddBlogs');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'AddBlogs':
        return <AddBlogs />;
      case 'AllBlogs':
        return <AllBlogs />;
      default:
        return <AddBlogs />;
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen flex">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        className={`fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className=" px-1 py-1 rounded-md bg-blue-600">
                <img src='/Main.png' title='RC TECH SOLUTIONS' className=' w-20'/>
            </i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Admin Panel
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={toggleSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={() => setActiveComponent('AddBlogs')}
        >
          <i className="bi bi-file-plus-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Blogs</span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={() => setActiveComponent('AllBlogs')}
        >
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">All Blogs</span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
      </div>
      <div className="flex-1 p-4 ml-[300px] bg-gray-700">
        {renderComponent()}
      </div>
    </div>
  );
}
