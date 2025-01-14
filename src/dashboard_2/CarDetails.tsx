import React from 'react';

const CarDetails: React.FC = () => {
  return (
    <div className="p-4 rounded-xl border-solid border-2 border-green-600">
      <span className="text-gray-600 dark:text-gray-400">Alfa Romeo</span>
      <h2 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">Giulia Veloce</h2>
      <ul className="mt-2 text-gray-600 dark:text-gray-300 p-4">
        <li className="flex justify-between w-full p-1">
          <span><strong>Year:</strong></span>
          <span>2024</span>
        </li>        
        <hr className="my-4 border-gray-600" />
        <li className="flex justify-between w-full p-1">
          <span><strong>Type:</strong></span>
          <span>Sedan</span>
        </li>          
        <hr className="my-4 border-gray-600" />
        <li className="flex justify-between w-full p-1">
          <span><strong>Colour:</strong></span>
          <span>Dark Blue</span>
        </li>
        <hr className="my-4 border-gray-600" />          
        <li className="flex justify-between w-full p-1">
          <span><strong>Rental Type:</strong></span>
          <span>Per hour</span>
        </li>
        <hr className="my-4 border-gray-600" />         
        <li className="flex justify-between w-full p-1">
          <span><strong>Car Insurance:</strong></span>
          <span>Collision Damage Waiver</span>
        </li>  
      </ul>
    </div>
  );
};

export default CarDetails;