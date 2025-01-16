import React from 'react';

interface CarCardProps {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
  onClick?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  make,
  model,
  year,
  price,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative border rounded-lg shadow-md p-2 bg-orange-200 dark:bg-gray-800 h-[200px] cursor-pointer hover:scale-105 transition-transform"
    >
      
      <img
        src={image || '/default-car.jpg'}
        alt={`${make} ${model}`}
        className="w-full h-[130px] object-cover rounded-md"
      />

      
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
          {make} {model}, {year}
        </h3>
      </div>

      
      <div className="absolute bottom-1 right-3 text-black font-semibold text-l px-3 py-1 rounded">
        ${price}/hour
      </div>
    </div>
  );
};

export default CarCard;
