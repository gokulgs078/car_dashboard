import React from 'react';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Filters from './Filters.tsx';
import CarList from './CarList.tsx';

const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex flex-1 p-0">
        <Sidebar />
        <div className="flex-grow flex flex-col md:flex-row">
          <div className="w-full md:w-96 p-0 border-solid border-2 border-red-600 p-6 bg-gray-300 rounded-xl">
            <Filters />
          </div>
          <div className="flex-grow p-0 border-solid border-2 border-green-600 p-2 ">
            <CarList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
