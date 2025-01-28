import React from "react";
// Import styles
import "../styles/Country.css";

// Import images
import FEntertainment from "../assets/images/FranceEntertainment.jpg";
import FFood from "../assets/images/FranceFood.jpg";

// Define the FrancePage component
const FrancePage: React.FC = () => {
  return (
    <section className="country">
      {/* Info and activities link */}
      <div className="country-container">
        {/* Add an image of the country */}
        <img
          src={FEntertainment}
          alt="Eiffel Tower"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to DO in France</h1>
          {/* Info and link to activities article */}
          <p>
            France is full of love, fashion, and art! Check out these amazing
            places to visit and fun activities to try!
          </p>
          <p>
            <a
              href="https://travelfrancebucketlist.com/things-to-do-in-france/"
              target="_blank"
              rel="noopener noreferrer"
            >
              50 Best Things to Do in France
            </a>
          </p>
        </div>
      </div>

      {/* Info and activities link */}
      <div className="country-container">
        {/* Add an image of the country */}
        <img src={FFood} alt="French Food" className="country-image" />
        <div className="country-text">
          {/* Section title */}
          <h1>What to EAT in France</h1>
          {/* Info and link to activities article */}
          <p>What is more French than food! Don't miss these treats!</p>
          <p>
            <a
              href="https://www.atlasobscura.com/cool-places-to-eat/france"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cool Places to Eat & Drink in France
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrancePage;
