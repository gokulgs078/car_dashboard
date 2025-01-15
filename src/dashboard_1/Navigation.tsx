import React from 'react';
import Filters from './Filters.tsx';
import CarList from './CarList.tsx';

const Navigation: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col md:flex-row">
      <div className="w-fit md:w-96 p-6 bg-gray-100 rounded-xl h-[737px]">
        <Filters />
      </div>
      <div className="flex-grow p-4 h-[737px] overflow-y-scroll">
        <CarList />
      </div>
    </div>
  );
};

export default Navigation;
