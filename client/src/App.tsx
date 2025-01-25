import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import Header from './pages/Header';
import Footer from './pages/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container container-fluid mt-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default App;