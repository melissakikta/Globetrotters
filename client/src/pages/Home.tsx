import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

import country1 from '../assets/images/uk-flag.gif';
import country2 from '../assets/images/fr-flag.gif';
import country3 from '../assets/images/gm-flag.gif';
import country4 from '../assets/images/pl-flag.gif';
import country5 from '../assets/images/sp-flag.gif';


//function to create the About Me section
const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="page-section">
        <h1>Where would you like to start!</h1>
        <div className="flex-container">
          <Link to="/England" className="flex-item">
            <img src={country1} alt="England flag" className="country-image" />
            <h2>England</h2>
          </Link>

          <Link to="/France" className="flex-item">
            <img src={country2} alt="France flag" className="country-image" />
            <h2>France</h2>
          </Link>

          <Link to="/Germany" className="flex-item">
            <img src={country3} alt="Germany flag" className="country-image" />
            <h2>Germany</h2>
          </Link>

          <Link to="/Poland" className="flex-item">
            <img src={country4} alt="Poland flag" className="country-image" />
            <h2>Poland</h2>
          </Link>

          <Link to="/Spain" className="flex-item">
            <img src={country5} alt="Spain flag" className="country-image" />
            <h2>Spain</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;