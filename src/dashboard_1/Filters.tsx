import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColorFilter } from '../redux/filterSlice.ts';
import { RootState } from '../redux/store.ts';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: RootState) => state.filters.selectedColor);
  const [availableNow, setAvailableNow] = useState(false);

  const handleColorClick = (color: string) => {
    const newColor = selectedColor === color ? null : color; 
    dispatch(setColorFilter(newColor));
  };

  const resetFilters = () => {
    setAvailableNow(false);
    dispatch(setColorFilter(null));
  };

  return (
    <div className="pr-2 px-2 accent-blue-500 bg-gray-100 rounded-lg shadow-md w-[350px]">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-dark">Filters</h3>
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
            <span className="text-gray-600 dark:text-gray-400"></span>
            <select className="w-full mt-1 p-2 accent-blue-500 border rounded">
              <option>Alfa Romeo</option>
              <option>BMW</option>
              <option>Audi</option>
            </select>
          </label>
          <label className="block w-full">
            <span className="text-gray-600 dark:text-gray-400"></span>
            <select className="w-full mt-1 p-2 accent-blue-500 border rounded">
              <option>Giulia</option>
              <option>Q4</option>
              <option>Quadrifoglio</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-black font-semibold">Type</label>
          <div className="grid grid-cols-3 gap-4">
            {['Sedan', 'Van', 'Pickup', 'Wagon', 'Minivan', 'Coupe'].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" /> {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-black font-semibold">Color</label>
          <div className="grid grid-cols-3 gap-4 mt-2 accent-blue-500">
            {[
              { color: 'Black', hex: '#000' },
              { color: 'Silver', hex: '#c0c0c0' },
              { color: 'Dark Blue', hex: '#00008b' },
              { color: 'White', hex: '#fff' },
              { color: 'Grey', hex: '#808080' },
              { color: 'Brown', hex: '#8b4513' },
            ].map(({ color, hex }) => (
              <div key={color} className="flex items-center space-x-2 accent-blue-500">
                <label
                  onClick={() => handleColorClick(color)}
                  className={`flex items-center justify-center w-4 h-4 rounded-full border cursor-pointer ${
                    selectedColor === color ? 'ring-2 accent-blue-500 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: hex }}
                ></label>
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
                availableNow ? 'bg-blue-500' : ''
              }`}
            />
            <span
              className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transform transition ${
                availableNow ? 'translate-x-6' : ''
              }`}
            />
          </label>
        </div>

        <div>
          <label className="block text-black font-semibold">Rental Type</label>
          <div className="flex gap-4 mt-2 accent-blue-500">
            <button className="px-1 py-2 accent-blue-500 border rounded hover:bg-blue-600 hover:text-white">
              Any
            </button>
            <button className="px-1 py-2 accent-blue-500 border rounded hover:bg-blue-600 hover:text-white">
              Per Day
            </button>
            <button className="px-1 py-2 accent-blue-500 bg-blue-500 text-white rounded">Per Hour</button>
          </div>
        </div>

        <div>
          <label className="block text-black font-semibold">Car Insurance</label>
          <div className="grid grid-cols-2 accent-blue-500 gap-x-4 mt-2 accent-blue-500">
  <label className="flex items-center whitespace-nowrap">
    <input type="checkbox" className="mr-2 accent-blue-500" /> Collision Damage Waiver
  </label>
  <div className="ml-12">
  <label className="flex items-center whitespace-nowrap">
    <input type="checkbox" className="mr-2 accent-blue-500" /> Roadside Plus
  </label>
  </div>
</div>


        </div>
      </div>
      <div className="mt-16 ml-28  flex items-center justify-start">
    <button className="text-blue-500 font-medium flex items-center">
      All insurance
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 ml-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
    </div>
  );
};

export default Filters;
