import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">Starcar ✨</div>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">
          Light mode
        </button>
        <div className="text-gray-800 dark:text-white">New York, US</div>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="User profile"
            className="rounded-full"
          />
          <span className="text-gray-800 dark:text-white">Nancy Holloway</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
