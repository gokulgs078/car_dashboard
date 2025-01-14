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
  id,
  make,
  model,
  year,
  color,
  mileage,
  price,
  fuelType,
  transmission,
  engine,
  horsepower,
  features,
  owners,
  image,
  onClick,
}) => {
  return (
    <div 
      onClick={onClick} 
      className="border rounded-lg shadow-md p-3 bg-orange-200 dark:bg-gray-800 h-full cursor-pointer"
    >
      <img
        src={image}
        alt={`${make} ${model}`}
        className="w-full h-[130px] object-cover rounded-md"
      />
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
          {make} {model}, {year}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">Price: ${price}/hour</p>
      </div>
    </div>
  );
};

export default CarCard;
