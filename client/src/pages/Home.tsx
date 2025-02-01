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
          <div className="flex-item">
            <img src={country1} alt="country flag" className="country-image" />
            <h2>
              <Link to="/England">England</Link>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country2} alt="country flag" className="country-image" />
            <h2>
              <Link to="/France">France</Link>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country3} alt="country flag" className="country-image" />
            <h2>
              <Link to="/Germany">Germany</Link>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country4} alt="country flag" className="country-image" />
            <h2>
              <Link to="/Poland">Poland</Link>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country5} alt="country flag" className="country-image" />
            <h2>
              <Link to="/Spain">Spain</Link>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;