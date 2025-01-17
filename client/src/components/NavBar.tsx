//import navbar style sheet
import '../styles/Navbar.css';
import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Home';
import Exchange from './Exchange';
import BucketList from './BucketList;

//function to create the Navbar
function Navbar() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } else if (currentPage === 'Exchange') {
      return <Exchange />;
    } else
    return <BucketList />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}
        
      </main>
    </div>
  );
}

export default Navbar;

