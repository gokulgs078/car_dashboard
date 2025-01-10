import React from 'react';

interface CarCardProps {
  name: string;
  model: string;
  year: number;
  pricePerHour: number;
  isAvailable: boolean;
  imageUrl: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, model, year, pricePerHour, isAvailable, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-md p-3 bg-orange-200 dark:bg-gray-800 h-full">
      <img
        src={imageUrl}
        alt={`${name} ${model}`}
        className="w-full h-24 object-cover rounded-md" 
      />
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
          {name} {model}, {year}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">${pricePerHour}/hour</p>
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded ${
            isAvailable ? 'bg-green-100 text-green-700' : 'bg-gray-300 text-gray-700'
          }`}
        >
          {isAvailable ? 'Available' : 'Booked'}
        </span>
      </div>
    </div>
  );
};

export default CarCard;
