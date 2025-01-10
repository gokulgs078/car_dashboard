import React from 'react';

const Filters: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Filters</h3>
      <div className="mt-4 space-y-4">
        <div className="flex space-x-4">
          <label className="block w-full">
            <span className="text-gray-600 dark:text-gray-400">Car Brand</span>
            <select className="w-full mt-1 p-2 border rounded">
              <option>Alfa Romeo</option>
              <option>BMW</option>
              <option>Audi</option>
            </select>
          </label>
          <label className="block w-full">
            <span className="text-gray-600 dark:text-gray-400">Car Model</span>
            <select className="w-full mt-1 p-2 border rounded">
              <option>Giulia</option>
              <option>Q4</option>
              <option>Quadrifoglio</option>
            </select>
          </label>
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Price Range</label>
          <input type="range" min="20" max="80" className="w-full mt-1" />
        </div>
        <div>
        <label className="block text-gray-600 dark:text-gray-400">Type</label>
        <div className="grid grid-cols-3 gap-2">
            
            <input type="checkbox" className="mr-1"/> Sedan
            <input type="checkbox" className="mr-1"/> Sedan
            <input type="checkbox" className="mr-1"/> Sedan

        </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
