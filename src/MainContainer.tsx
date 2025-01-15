import React from 'react';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Navigation from './dashboard_1/Navigation.tsx';
import Destination from './dashboard_2/Destination.tsx';

const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900 ">
      <Header />
      <div className="flex flex-1 p-0">
        <Sidebar />
        <div className="flex-grow flex flex-col md:flex-row">
          <Navigation />
          {/* <Destination /> */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
