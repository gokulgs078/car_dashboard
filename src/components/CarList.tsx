import React from 'react';
import CarCard from './CarCard.tsx';


const cars = [
  {
    id: 1,
    name: 'Alfa Romeo',
    model: 'Giulia Veloce',
    year: 2024,
    pricePerHour: 23.3,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Alfa Romeo',
    model: 'Competizione',
    year: 2024,
    pricePerHour: 20.1,
    isAvailable: false,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'BMW',
    model: 'M3',
    year: 2024,
    pricePerHour: 25.0,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    name: 'Audi',
    model: 'A4',
    year: 2024,
    pricePerHour: 21.5,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    name: 'Mercedes',
    model: 'C-Class',
    year: 2024,
    pricePerHour: 27.0,
    isAvailable: false,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    name: 'Tesla',
    model: 'Model S',
    year: 2024,
    pricePerHour: 30.0,
    isAvailable: true,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const CarList: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          24 cars to rent
        </span>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          View all
        </a>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            model={car.model}
            year={car.year}
            pricePerHour={car.pricePerHour}
            isAvailable={car.isAvailable}
            imageUrl={car.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CarList;
