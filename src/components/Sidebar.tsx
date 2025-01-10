import React from 'react';
import { MdAppsOutage } from "react-icons/md";
import { IoCar } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";

const Sidebar: React.FC = () => {
  return (
    <div className="w-20 p-6 bg-gray-100 dark:bg-gray-900 border-solid border-0 border-indigo-600">
      <div className="flex flex-col space-y-4">
        <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><MdAppsOutage size={30} /></button>
        <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><IoCar size={30}  /></button>
        <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><SlCalender size={30}  /></button>
        <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><IoHeartOutline size={30}  /></button>
        <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><BsBox size={30} /></button>
      </div>
    </div>
  );
};

export default Sidebar;
