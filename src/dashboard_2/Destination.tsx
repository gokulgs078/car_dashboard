import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { clearSelectedCar } from '../redux/carSlice.ts';
import BookingSummary from './BookingSummary.tsx';
import CarImage from './CarImage.tsx';
import CarDetails from './CarDetails.tsx';

const Destination: React.FC = () => {
  const selectedCar = useSelector((state: RootState) => state.car.selectedCar);
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(clearSelectedCar()); // Clear selected car to show the car list (Navigation).
  };

  if (!selectedCar) {
    return <p className="text-center text-gray-500">No car selected.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="flex flex-col gap-6">
        <div className="border-solid border-2xl border-green-600 bg-white h-full relative shadow-md rounded-lg">
          <div className="flex items-center p-4 bg-white rounded-t-lg">
            {/* Back Button */}
            <button
              className="mr-4 p-2 rounded-full hover:bg-gray-200"
              onClick={handleBackClick} // Dispatch the back action
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 text-left">
              <h2 className="text-xl font-bold">{selectedCar.make} {selectedCar.model}</h2>
              <p className="text-sm text-gray-500">Available</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-semibold">${selectedCar.price}</span>
              <span className="text-sm text-gray-500"> / hour</span>
            </div>
          </div>
          <CarImage image={selectedCar.image} isNew={true} isAvailable={true} />
        </div>
        <CarDetails car={selectedCar} />
      </div>
      <BookingSummary car={selectedCar} />
    </div>
  );
};

export default Destination;
