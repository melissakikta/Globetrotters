// Import navbar style sheet
import '../styles/Navbar.css';
import React, { useState } from 'react';
import NavTabs from './NavTabs';

import Home from '../pages/Home';
import ExchangePage from '../pages/Exchange';
import Bucketlist from '../pages/BucketList';

const Navbar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } else if (currentPage === 'Exchange') {
      return <ExchangePage />;
    } else {
      return <Bucketlist />;
    }
  };

  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
};

export default Navbar;