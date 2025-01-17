import React from 'react';

interface CarCardProps {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ make, model, year, price, image, onClick }) => {
  return (
    <div
      className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={`${make} ${model}`}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <div className="flex justify-between items-center text-lg text-gray-700 mb-2">
        <div className="truncate w-2/3 text-sm sm:text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
          <span className="font-medium">{`${make} ${model} ${year}`}</span>
        </div>
        <div className="w-1/3 text-right md:whitespace-normal md:break-words md:text-xs">
          <span className="text-sm sm:text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">${price}/hour</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
