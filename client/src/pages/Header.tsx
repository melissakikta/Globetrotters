import React from 'react';

//import header style sheet
import '../styles/Header.css';

//function to create the Header
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>GlobeTrotters</h1>
    </header>
  );
}

export default Header;
