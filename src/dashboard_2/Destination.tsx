import React from 'react';
import BookingSummary from './BookingSummary.tsx';
import CarImage from './CarImage.tsx';
import CarDetails from './CarDetails.tsx';
import MapSection from './MapSection.tsx';

const Destination: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="flex flex-col gap-6">
        <div className="border-solid border-2xl border-green-600 bg-gray-300 h-full">
          <CarImage />
        </div>
        <div className="border-solid border-2xl border-red-600 bg-gray-300">
          <CarDetails />
        </div>
      </div>
      <div className="flex flex-col gap-6 border-solid border-2 border-red-600">
        {/* <div className="border-solid border-2xl border-orange-600 bg-gray-100 h-full">
          <MapSection />
        </div> */}
        <div className="border-solid border-2 border-blue-600 h-full">
          <BookingSummary />
        </div>
      </div>
    </div>
  );
};

export default Destination;
