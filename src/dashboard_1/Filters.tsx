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
          {/* <label className="block text-gray-600 dark:text-gray-400">Price Range</label>
          <input type="range" min="20" max="80" className="w-full mt-1" /> */}
        </div>
        <div>
        <label className="block text-gray-600 dark:text-gray-400">Type</label>
        <div className="flex flex-wrap gap-12 inline">
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
        <div>
        {/* <label className="block text-gray-600 dark:text-gray-400">Type</label> */}
        <div className="flex flex-wrap gap-12">
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

        <div>
        <label className="block text-gray-600 dark:text-gray-400">Color</label>
        <div className="flex flex-wrap gap-12">
          <label className="flex items-center">
            <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Black
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Silver
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 mr-2" /> Darkblue
          </label>
        </div>
        </div>

        <div>
        {/* <label className="block text-gray-600 dark:text-gray-400">Type</label> */}
        <div className="flex flex-wrap gap-12">
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
        <hr className="my-4 border-gray-600" />
        <span className="text-gray-600 dark:text-gray-400">Available Now Only</span>
        <div className="mt-4">
          <label className="block text-gray-600 dark:text-black-400">Rental Type</label>
          <div className="button-group flex gap-4">
          <button className="px-4 p-2 text-black bg-white-500 rounded hover:bg-blue-600">Anyday</button>
          <button className="px-4 p-2 text-black bg-white-500 rounded hover:bg-blue-600">PerDay</button>
          <button className="px-4 p-2 text-black bg-blue-500 rounded hover:bg-blue-600">PerHour</button>
        </div>
        
        <div>
        <label className="block text-gray-600 dark:text-gray-400">Car Insurance</label>
        <div className="flex flex-wrap gap-10">
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
      </div>
    </div>
  );
};

export default Filters;
