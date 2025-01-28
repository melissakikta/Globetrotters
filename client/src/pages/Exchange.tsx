import React, { useState, useEffect } from "react";
import '../styles/Country.css';
// Import images
import exchangeImg1 from '../assets/images/exchange.jpeg';
import exchangeImg2 from '../assets/images/exchange2.png';

import { fetchExchangeRates, convertAmount } from "../utils/currencyExchange";

interface ExchangeRateResponse {
  rates: Record<string, number>;
  [key: string]: unknown; // Other possible properties
}

const CurrencyExchangePage: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRates = async () => {
      try {
        const response: ExchangeRateResponse = await fetchExchangeRates(baseCurrency);
        setExchangeRates(response.rates); // Use only the rates property
      } catch (error) {
        console.error(error);
        setError("Failed to fetch exchange rates.");
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

  return (
    <section className="country">
      {/* Exchange Rates Section */}
      <div className="country-container">
        <img src={exchangeImg1} alt="Exchange rate" className="country-image" />
        <div className="country-text">
          <h1>Exchange Rates</h1>
          <p>Traveling somewhere new? Check out the exchange rates before you go!</p>
          <h2>Exchange Rates</h2>
          {exchangeRates ? (
            <table className="exchange-rates-table">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(exchangeRates).map(([currency, rate]) => (
                  <tr key={currency}>
                    <td>{currency}</td>
                    <td>{rate.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading rates...</p>
          )}
        </div>
      </div>

      {/* Exchange Calculation Section */}
      <div className="country-container">
        <img src={exchangeImg2} alt="Exchange rate calculator" className="country-image" />
        <div className="country-text">
          <h1>Exchange Calculation</h1>
          <p>Want to know how much you'll get for your money? Use this calculator to find out!</p>
          <div className="calculator-form">
            <label>
              Base Currency:
              <input
                type="text"
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value.toUpperCase())}
                placeholder="e.g., EUR"
              />
            </label>
            <label>
              Target Currency:
              <input
                type="text"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
                placeholder="e.g., USD"
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="e.g., 100"
              />
            </label>
            <button onClick={handleConvert}>Convert</button>
          </div>
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
