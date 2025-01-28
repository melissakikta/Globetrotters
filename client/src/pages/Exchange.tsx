import React, { useState, useEffect, useMemo } from "react";
import '../styles/Country.css';
// Import images
import exchangeImg1 from '../assets/images/exchange.jpeg';
import exchangeImg2 from '../assets/images/exchange2.png';

import { fetchExchangeRates, convertAmount } from "../utils/currencyExchange";

const CurrencyExchangePage: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [exchangeRates, setExchangeRates] = useState<any>(null);

  useEffect(() => {
    const getRates = async () => {
      try {
        const rates = await fetchExchangeRates(baseCurrency);
        setExchangeRates(rates);
      } catch (error) {
        console.error(error);
      }
    };

    getRates();
  }, [baseCurrency]);

  const handleConvert = async () => {
    try {
      const result = await convertAmount(baseCurrency, targetCurrency, amount);
      setConvertedAmount(result);
    } catch (error) {
      console.error(error);
    }
  };
// Import service
// import { fetchExchangeRates } from '../utils/currencyExchange.js' // Ensure this path is correct

// const CurrencyExchangePage: React.FC = () => {
//   const [baseCurrency, setBaseCurrency] = useState<string>("EUR");
//   const [targetCurrency, setTargetCurrency] = useState<string>("USD");
//   const [amount, setAmount] = useState<number>(1);
//   const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
//   const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const exchangeService = useMemo(() => new fetchExchangeRates (), []);

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         const response = await exchangeService.fetchExchangeRates(baseCurrency);
//         setRates(response.conversion_rates);
//         setError(null);
//       } catch {
//         setError("Failed to fetch exchange rates.");
//       }
//     };
//     fetchRates();
//   }, [baseCurrency, exchangeService]);

//   const handleConvert = async () => {
//     try {
//       const result = await exchangeService.convertAmount(baseCurrency, targetCurrency, amount);
//       setConvertedAmount(result);
//       setError(null);
//     } catch {
//       setError("Conversion failed. Please try again.");
//     }
//   };

  return (
    <section className="country">
      {/* Exchange Rates Section */}
      <div className="country-container">
        <img src={exchangeImg1} alt="Exchange rate" className="country-image" />
        <div className="country-text">
          <h1>Exchange Rates</h1>
          <p>Traveling somewhere new? Check out the exchange rates before you go!</p>
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
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>

      {/* Exchange Calculation Section */}
      <div className="country-container">
        <img src={exchangeImg2} alt="Exchange rate calculator" className="country-image" />
        <div className="country-text">
          <h1>Exchange Calculation</h1>
          <p>Want to know how much you'll get for your money? Use this calculator to find out!</p>
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
          {convertedAmount !== null && (
            <p>
              {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
            </p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchangePage;
