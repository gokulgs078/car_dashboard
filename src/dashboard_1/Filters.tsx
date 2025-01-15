import React, { useState } from 'react';

const Filters: React.FC = () => {
  const [availableNow, setAvailableNow] = useState(false);

  const resetFilters = () => {
    setAvailableNow(false);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 space-y-6">
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
          <label className="block text-gray-600 dark:text-gray-400">Type</label>
          <div className="grid grid-cols-3 gap-4">
            {["Sedan", "Van", "Pickup", "Wagon", "Minivan", "Couple"].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-600 dark:text-gray-400">Color</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {[
              { color: "Black", hex: "#000" },
              { color: "Silver", hex: "#c0c0c0" },
              { color: "Dark Blue", hex: "#00008b" },
              { color: "White", hex: "#fff" },
              { color: "Grey", hex: "#808080" },
              { color: "Brown", hex: "#8b4513" },
            ].map(({ color, hex }) => (
              <div key={color} className="flex items-center space-x-2">
                <label
                  className="flex items-center justify-center w-4 h-4 rounded-full border cursor-pointer"
                  style={{ backgroundColor: hex }}
                >
                  <input type="checkbox" className="hidden" />
                </label>
                <span className="text-sm text-gray-600 dark:text-gray-400">{color}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 dark:text-gray-400">Available now only</span>
          <label className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              checked={availableNow}
              onChange={() => setAvailableNow(!availableNow)}
              className="opacity-0 w-0 h-0"
            />
            <span
              className={`absolute inset-0 bg-gray-300 rounded-full cursor-pointer transition ${
                availableNow ? "bg-blue-500" : ""
              }`}
            />
            <span
              className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transform transition ${
                availableNow ? "translate-x-6" : ""
              }`}
            />
          </label>
        </div>

        <div>
          <label className="block text-gray-600 dark:text-gray-400">Rental Type</label>
          <div className="flex gap-4 mt-2">
            <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">
              Any
            </button>
            <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">
              Per Day
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Per Hour</button>
          </div>
        </div>

        <div>
          <label className="block text-gray-600 dark:text-gray-400">Car Insurance</label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Collision Damage Waiver
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Roadside Plus
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
