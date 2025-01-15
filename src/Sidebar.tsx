import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MdAppsOutage } from "react-icons/md";
import { IoCar } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegBell, FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import { closeSidebar } from './redux/sidebarSlice.ts';
import { FaTimes } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "fixed inset-0 z-50" : "hidden"
      } md:relative md:block w-[100px] bg-gray-100 dark:bg-gray-900 h-full p-4 shadow-lg overflow-y-auto`}
    >
      
      <button
        className="absolute top-4 right-4 md:hidden text-gray-800 dark:text-white"
        onClick={handleCloseSidebar}
      >
        <FaTimes size={24} />
      </button>

      
      <div className="flex flex-col space-y-8">
        
        <div className="flex flex-col space-y-4">
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <MdAppsOutage size={30} className="text-gray-800 dark:text-white" />
          </button>
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <IoCar size={30} className="text-gray-800 dark:text-white" />
          </button>
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <SlCalender size={30} className="text-gray-800 dark:text-white" />
          </button>
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <IoHeartOutline size={30} className="text-gray-800 dark:text-white" />
          </button>
        </div>

        
        <div className="flex flex-col space-y-4 mt-[555px]">
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <FaRegBell size={30} className="text-gray-800 dark:text-white" />
          </button>
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <FaRegCircleQuestion size={30} className="text-gray-800 dark:text-white" />
          </button>
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <IoSettingsOutline size={30} className="text-gray-800 dark:text-white" />
          </button>
          <button className="flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-700 rounded">
            <IoExitOutline size={30} className="text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
