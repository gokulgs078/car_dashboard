import React from 'react';
import { MdAppsOutage } from "react-icons/md";
import { IoCar } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";

const Sidebar: React.FC = () => {
  return (
    <div className="w-20 p-1 bg-gray-100 dark:bg-gray-900 flex flex-col border-solid border-0 border-indigo-600 hidden md:block ">
      <div className="grid grid-cols-12 gap-4">
        <div className="flex flex-col space-y-4">
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><MdAppsOutage size={30} /></button>
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><IoCar size={30} /></button>
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><SlCalender size={30} /></button>
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><IoHeartOutline size={30} /></button>
        </div>

        <div className="flex flex-col space-y-4 mt-[555px]">
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><FaRegBell size={30} /></button>
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><FaRegCircleQuestion size={30} /></button>
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><IoSettingsOutline size={30} /></button>
          <button className="p-0 bg-gray-300 dark:bg-gray-700 rounded"><IoExitOutline size={30} /></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
