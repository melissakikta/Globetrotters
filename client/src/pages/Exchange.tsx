import '../styles/Country.css';
import React, { useState, useEffect } from "react";
//Import images

import '../../assets/images/exchange.jpeg';
import '../../assets/images/exchange2.png';
import { CurrencyExchangeService } from '../../../server/src/models/CurrecyExchage';


const CurrencyExchangePage: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState<string>("EUR");
  const [targetCurrency, setTargetCurrency] = useState<string>("USD");
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
  const [error, setError] = useState<string | null>(null);


  const exchangeService = React.useMemo(() => new CurrencyExchangeService(), []);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await exchangeService.fetchExchangeRates(baseCurrency);
        setRates(response.rates);
      } catch {
        setError("Failed to fetch exchange rates.");
      }
    };

    fetchRates();
  }, [baseCurrency, exchangeService]);

  const handleConvert = async () => {
    try {
      const result = await exchangeService.convertAmount(
        baseCurrency,
        targetCurrency,
        amount
      );
      setConvertedAmount(result);
      setError(null);
    } catch {
      setError("Conversion failed. Please try again.");
    }
  };

//function to create the About Me section
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src="../assets/images/exchange.jpeg"
          alt="exchange rate"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>Exchange Rates</h1>
          {/* Info and link to activities article */}
          <p>
            Traveling somewhere new? Check out the exchange rates before you go!
          </p>
          <p>
          <a href="https://www.tripadvisor.com/Attractions-g186217-Activities-England.html" target="_blank" rel="noopener noreferrer">
            display exchange rates for pound and euro displayed here from the API 
          </a>
          <h2>Exchange Rates</h2>
      {rates ? (
        <ul>
          {Object.entries(rates).map(([currency, rate]) => (
            <li key={currency}>
              {currency}: {rate.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading rates...</p>
      )}
          </p>
        </div>
      </div>

      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src="./assets/images/exchange2.png"
          alt="exchange rate"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>Exchange Calculation</h1>
          {/* Info and link to activities article */}
          <p>
            Want to know how much you'll get for your money? Use this calculator to find out!
          </p>
          <p>
          <a href="https://www.oanda.com/currency-converter/en/?from=EUR&to=USD&amount=1" target="_blank" rel="noopener noreferrer">
            Currency Converter
          </a>
          <div>
        <label>
          Base Currency:
          <input
            type="text"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value.toUpperCase())}
            placeholder="e.g., EUR"
          />
        </label>
      </div>
      <div>
        <label>
          Target Currency:
          <input
            type="text"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
            placeholder="e.g., USD"
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="e.g., 100"
          />
        </label>
      </div>
      <button onClick={handleConvert}>Convert</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {convertedAmount !== null && (
        <p>
          {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
        </p>
      )}
          </p>
        </div>
      </div>      
    </section>
  );
}

export default CurrencyExchangePage;