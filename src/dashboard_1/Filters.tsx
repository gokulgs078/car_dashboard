import React from 'react';

const Filters: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Filters</h3>
      <div className="mt-4 space-y-4">

        {/* Car Brand and Model */}
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

        {/* Car Type */}
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Car Type</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Sedan
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> SUV
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Coupe
            </label>
          </div>
        </div>

        {/* Color Options */}
        <div>
          <label className="block text-gray-600 dark:text-gray-400">Color</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Black
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Silver
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Dark Blue
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> White
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Grey
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Brown
            </label>
          </div>
        </div>

        {/* Rental Type */}
        <div className="mt-4">
          <label className="block text-gray-600 dark:text-gray-400">Rental Type</label>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-black bg-white border rounded hover:bg-blue-600 hover:text-white">
              Any Day
            </button>
            <button className="px-4 py-2 text-black bg-white border rounded hover:bg-blue-600 hover:text-white">
              Per Day
            </button>
            <button className="px-4 py-2 text-white bg-blue-500 border rounded hover:bg-blue-600">
              Per Hour
            </button>
          </div>
        </div>

        {/* Car Insurance */}
        <div className="mt-4">
          <label className="block text-gray-600 dark:text-gray-400">Car Insurance</label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Collision Damage Waiver
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Roadside Plus
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Filters;
