import React from 'react';
import CarCard from './CarCard.tsx';

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Silver",
    mileage: 20000,
    price: 25000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.0L 4-cylinder",
    horsepower: 169,
    features: [
      "Bluetooth",
      "Backup Camera",
      "Keyless Entry"
    ],
    owners: 1,
    image: "https://fakeimg.pl/500x500/cccccc"
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2021,
    color: "White",
    mileage: 18000,
    price: 22000,
    fuelType: "Gasoline",
    transmission: "CVT",
    engine: "1.5L 4-cylinder",
    horsepower: 158,
    features: [
      "Apple CarPlay",
      "Android Auto",
      "Lane Departure Warning"
    ],
    owners: 2,
    image: "https://fakeimg.pl/500x500/ffffff"
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2020,
    color: "Red",
    mileage: 15000,
    price: 35000,
    fuelType: "Gasoline",
    transmission: "Manual",
    engine: "5.0L V8",
    horsepower: 450,
    features: [
      "Leather Seats",
      "Navigation System",
      "Heated Seats"
    ],
    owners: 1,
    image: "https://fakeimg.pl/500x500/ff0000"
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Equinox",
    year: 2019,
    color: "Blue",
    mileage: 30000,
    price: 20000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "1.5L 4-cylinder",
    horsepower: 170,
    features: [
      "Rearview Camera",
      "Blind-Spot Monitoring",
      "Wi-Fi Hotspot"
    ],
    owners: 2,
    image: "https://fakeimg.pl/500x500/0000ff"
  },
  {
    id: 5,
    make: "Nissan",
    model: "Altima",
    year: 2020,
    color: "Black",
    mileage: 22000,
    price: 21000,
    fuelType: "Gasoline",
    transmission: "CVT",
    engine: "2.5L 4-cylinder",
    horsepower: 188,
    features: [
      "Remote Start",
      "Automatic Emergency Braking",
      "Lane Keeping Assist"
    ],
    owners: 1,
    image: "https://fakeimg.pl/500x500/000000"
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: 2021,
    color: "White",
    mileage: 12000,
    price: 40000,
    fuelType: "Diesel",
    transmission: "Automatic",
    engine: "2.0L 4-cylinder",
    horsepower: 255,
    features: [
      "Sunroof",
      "Adaptive Cruise Control",
      "Parking Assistance"
    ],
    owners: 1,
    image: "https://fakeimg.pl/500x500/ffffff"
  },
];

const CarList: React.FC = () => {
  const handleCardClick = (carId: number) => {
    if (carId === 1) {
      console.log('Navigate to another component');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          {cars.length} cars to rent
        </span>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            make={car.make}
            model={car.model}
            price={car.price}
            image={car.image}
            onClick={() => handleCardClick(car.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarList;
