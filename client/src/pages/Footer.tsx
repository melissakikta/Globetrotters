import React from 'react';

// Import header style sheet
import '../styles/Footer.css';
import github from '../assets/images/github.png';
import globe from '../assets/images/globe.png';

// Function to create the Footer
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        {/* Add links to LinkedIn, GitHub, and BlueSky */}
        <img src={globe} alt="globe" />
      
        <h2>
          <a href="https://github.com/ivandamian1" target="_blank" rel="noopener noreferrer">
            Ivan <img src={github} alt="github link" />
          </a>
        </h2>

        <h2>
          <a href="https://github.com/melissakikta" target="_blank" rel="noopener noreferrer">
            Missy <img src={github} alt="github link" />
          </a>
        </h2>

        <h2>
          <a href="https://github.com/pfeldmannn" target="_blank" rel="noopener noreferrer">
            Paige <img src={github} alt="github link" />
          </a>
        </h2>
      </ul>
    </div>
  );
}

export default Footer;
