import React from 'react';

interface CarImageProps {
  image: string;
  isNew: boolean;
  isAvailable: boolean;
}

const CarImage: React.FC<CarImageProps> = ({ image, isNew, isAvailable }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-80 relative">
      <div className="absolute top-2 left-2 flex gap-2">
        {isNew && (
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
        )}
        {isAvailable && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">AVAILABLE</span>
        )}
      </div>
      <img
        src={image || '/default-car.jpg'}
        alt="Car"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default CarImage;
