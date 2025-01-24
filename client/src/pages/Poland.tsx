import React from 'react';

import '../styles/Country.css';

//Import images
import PEntertainment from '../../assets/images/PolandEntertainment.jpg';
import PFood from '../../assets/images/PolandFood.webp';

//function to create the About Me section
function PolandPage() {
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={PEntertainment}
          alt="Poland City Street"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to DO in Poland</h1>
          {/* Info and link to activities article */}
          <p>
            Nothing beats the beauty of Poland! Check out these amazing places to visit and fun activities to try!
          </p>
          <p>
          <a href="https://www.viator.com/Poland/d62" target="_blank" rel="noopener noreferrer">
          Eastern Europe’s shining star    
          </a>
          </p>
        </div>
      </div>

      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={PFood}
          alt="Polish Food"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to EAT in Germany</h1>
          {/* Info and link to activities article */}
          <p>
            Try not to eat your weight in pierogi!
          </p>
          <p>
          <a href="https://www.tripadvisor.com/Attractions-g274723-Activities-c36-Poland.html" target="_blank" rel="noopener noreferrer">
            Food & Drink Tours in Poland    
          </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PolandPage;
