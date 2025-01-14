import React, { useState } from 'react';

const BookingSummary: React.FC = () => {
  // Define state for pick-up and drop-off times
  const [pickup, setPickup] = useState('2023-12-10T08:00');
  const [dropoff, setDropoff] = useState('2023-12-10T14:00');

  return (
    <div className="bg-black text-white rounded-lg p- 12 h-full">
      <h3 className="text-xl font-semibold">Pick-up and Drop-off</h3>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-gray-400">Pick-up:</p>
          <input
            type="datetime-local"
            className="font-bold border border-gray-300 rounded px-2 py-1"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>
        <div>
          <p className="text-gray-400">Drop-off:</p>
          <input
            type="datetime-local"
            className="font-bold border border-gray-300 rounded px-2 py-1"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-400 flex justify-between">
          Total time: <span className="font-bold text-white ml-96">6 hours</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-400 flex justify-between">
          Price: <span className="font-bold text-white">$139.80</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-400 flex justify-between">
          Taxes: <span className="font-bold text-white">$15.20</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-400 flex justify-between">
          Insurance: <span className="font-bold text-white">$60</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Total price: $215</p>
          <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Rent car
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
