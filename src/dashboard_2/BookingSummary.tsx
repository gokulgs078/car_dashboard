import React, { useState, useEffect } from 'react';

interface BookingSummaryProps {
  car: {
    price: number;
    insuranceCost: number;
  } | null;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ car }) => {
  const [pickup, setPickup] = useState('2023-12-10T08:00');
  const [dropoff, setDropoff] = useState('2023-12-10T14:00');
  const [totalTime, setTotalTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (pickup && dropoff && car) {
      const pickupDate = new Date(pickup);
      const dropoffDate = new Date(dropoff);
      const hours = (dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60);
      setTotalTime(hours);

      const basePrice = car.price * hours;
      const insurance = car.insuranceCost || 60; 
      const taxes = basePrice * 0.1; 

      setTotalPrice(basePrice + taxes + insurance);
    }
  }, [pickup, dropoff, car]);

  if (!car) return <p className="text-center text-gray-500">No car selected.</p>;

  return (
    <div className="bg-black text-white rounded-lg p-6 h-full mr-2">
      <div className="flex flex-wrap lg:flex-nowrap justify-between mt-4 gap-4">
        <div className="w-full md:w-1/2 lg:w-1/2 lg:ml-auto">
          <p className="text-white-400">Pick-up date and time</p>
          <input
            type="datetime-local"
            className="font-bold border border-gray-300 rounded px-2 py-1 text-white bg-gray-600 max-w-[300px]"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/2 lg:ml-auto flex lg:justify-end">
          <div>
          <p className="text-white-400">Drop-off date and time</p>
          <input
            type="datetime-local"
            className="font-bold border border-gray-300 rounded px-2 py-1 text-white bg-gray-600 w-full max-w-[300px]"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-400 flex justify-between">
          Total time: <span className="font-bold">{totalTime.toFixed(1)} hours</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-400 flex justify-between">
          Price: <span className="font-bold">${(car.price * totalTime).toFixed(2)}</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-400 flex justify-between">
          Taxes (10%): <span className="font-bold">${((car.price * totalTime) * 0.1).toFixed(2)}</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-400 flex justify-between">
          Insurance: <span className="font-bold">${car.insuranceCost || 60}</span>
        </p>
        <hr className="my-4 border-gray-600" />
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Total price: ${totalPrice.toFixed(2)}</p>
          <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Rent Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
