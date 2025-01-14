import React from 'react';

const CarImage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-80 relative border-solid border-2 border-red-600">
      <div className="absolute top-2 left-2 flex gap-2">
        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-2 rounded">NEW</span>
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-2 rounded">AVAILABLE</span>
      </div>
      
      {/* <img
        src="/path/to/car.jpg" 
        alt="Car"
        className="w-full h-48 object-cover rounded-lg"
      /> */}
    </div>
  );
};

export default CarImage;
