import React from 'react';

interface CarDetailsProps {
  car: {
    make: string;
    model: string;
    year: number;
    type: string;
    color: string;
    rentalType: string;
    insurance: string;
    horsepower: number;
    transmission: string;
  } | null;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  if (!car) return <p className="text-center text-gray-500">No car details available.</p>;

  return (
    <div className="p-4 rounded-xl">
      <span className="text-gray-600 dark:text-gray-400">{car.make}</span>
      <div className="flex justify-between items-center mt-2">
      <h2 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">{car.model}</h2>
      <div className="flex items-center ml-2">
      <span className="text-yellow-500 mr-1 text-2xl">★</span>
      <span className="text-gray-600 dark:text-dark-400 text-2xl font-bold">5</span>
      </div>
    </div>
      <ul className="mt-4 text-gray-600 dark:text-gray-300">
        <li className="flex justify-between">
          <span className="font-semibold">Year:</span>
          <span>{car.year}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Type:</span>
          <span>Sedan</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Color:</span>
          <span>{car.color}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Transmission:</span>
          <span>{car.transmission}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Horsepower:</span>
          <span>{car.horsepower} HP</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Rental Type:</span>
          <span>Per hour</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Insurance:</span>
          <span>Collision Damage Waiver</span>
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
