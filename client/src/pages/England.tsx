import '../styles/Country.css';

//Import images

import EEntertainment from '../../assets/images/EnglandEntertainment.jpg';
import EFood from '../../assets/images/EnglandFood.avif';

//function to create the About Me section
function EnglandPage() {
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={EEntertainment}
          alt="Big Ben"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to DO in England</h1>
          {/* Info and link to activities article */}
          <p>
            British Monarchs, Shakespeare, and the Beatles are just a few of the things that make England a must-see destination!
          </p>
          <p>
          <a href="https://www.tripadvisor.com/Attractions-g186217-Activities-England.html" target="_blank" rel="noopener noreferrer">
            Things to Do in England   
          </a>
          </p>
        </div>
      </div>

      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={EFood}
          alt="English Food"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to EAT in England</h1>
          {/* Info and link to activities article */}
          <p>
            Try something new at these great eateries!
          </p>
          <p>
          <a href="https://www.visitbritain.com/en/things-to-do/food-and-drink" target="_blank" rel="noopener noreferrer">
            Great Britain Food and Drink    
          </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default EnglandPage;
