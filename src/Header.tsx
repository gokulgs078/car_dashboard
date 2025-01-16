import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import { toggleSidebar } from "./redux/sidebarSlice.ts";
import ThemeToggler from "./ThemeToggler.tsx";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-4">
        
        <button
          className="md:hidden bg-black text-white p-2 rounded hover:bg-gray-700"
          onClick={handleSidebarToggle}
        >
          <FaBars size={24} />
        </button>
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Starcar ✨
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="absolute left-1/2 -translate-x-1/2">
          <ThemeToggler />
        </div>
        <div className="hidden md:block text-gray-800 dark:text-white">New York, US</div>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            // alt="User profile"
            className="rounded-full"
          />
          <span className="text-gray-800 dark:text-white">Nancy Holloway</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
