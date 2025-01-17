import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from './CarCard.tsx';
import { setSelectedCar } from '../redux/carSlice.ts';
import { RootState } from '../redux/store.ts';

interface Car {
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
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: RootState) => state.filters.selectedColor);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('/cars.json');
      const data = await response.json();
      setCars(data);
    };

    fetchCars();
  }, []);

  const handleCarClick = (car: Car) => {
    dispatch(setSelectedCar(car));
  };

  const filteredCars = selectedColor
    ? cars.filter((car) => car.color.toLowerCase() === selectedColor.toLowerCase())
    : cars;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          {filteredCars.length} cars to rent
        </span>
        <a
          href="/view-all"
          className="text-blue-500 hover:underline text-sm"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            {...car}
            onClick={() => handleCarClick(car)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarList;
