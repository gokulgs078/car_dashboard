import React from 'react';
import Filters from './Filters.tsx';
import CarList from './CarList.tsx';

const Navigation: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col md:flex-row">
      <div className="w-fit md:w-96 p-0 border-solid border-2 border-red-600 p-6 bg-gray-300 rounded-xl h-[vh]">
        <Filters />
      </div>
      <div className="flex-grow p-0 border-solid border-2 border-green-600 p-2 h-[vh]">
        <CarList />
      </div>
    </div>
  );
};

export default Navigation;
