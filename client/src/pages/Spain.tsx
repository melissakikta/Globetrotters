import React from 'react';
//Import styles
import '../styles/Country.css';

//Import images
import SEntertainment from '../../assets/images/SpainEntertainment.jpg';
import SFood from '../../assets/images/SpainFood.webp';

//function to create the About Me section
function SpainPage() {
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={SEntertainment}
          alt="Basílica de la Sagrada Família"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to DO in Spain</h1>
          {/* Info and link to activities article */}
          <p>
            The land of Flamenco, Tapas, and beautiful beaches! Check out these amazing places to visit and fun activities to try!
          </p>
          <p>
          <a href="https://www.spain.info/en/top/things-to-do-once-in-life-spain/" target="_blank" rel="noopener noreferrer">
          20 things to do at least once in your life in Spain    
          </a>
          </p>
        </div>
      </div>

      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={SFood}
          alt="Spainsh Food"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to EAT in Spain</h1>
          {/* Info and link to activities article */}
          <p>
            The flavors of Spain are as diverse as the country itself! Don't miss these treats!
          </p>
          <p>
          <a href="https://www.lonelyplanet.com/articles/what-to-eat-and-drink-in-spain" target="_blank" rel="noopener noreferrer">
          Where to eat and drink in Spain    
          </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SpainPage;
