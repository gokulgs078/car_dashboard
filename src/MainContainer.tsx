import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Navigation from './dashboard_1/Navigation.tsx';
import Destination from './dashboard_2/Destination.tsx';
import { RootState } from './redux/store.ts';

const MainContainer: React.FC = () => {
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);
  const selectedCar = useSelector((state: RootState) => state.car.selectedCar); // Get selected car

  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="flex flex-1">
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <Sidebar />
          </div>
        )}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-grow">
          {/* Show Destination if a car is selected, otherwise show Navigation */}
          {selectedCar ? <Destination /> : <Navigation />}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
