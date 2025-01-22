import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container container-fluid mt-5'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;