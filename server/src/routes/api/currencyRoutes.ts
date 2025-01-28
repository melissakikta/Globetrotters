import express from "express";
import { CurrencyExchangeService } from "../../models/CurrencyExchange.js";

const router = express.Router();
const currencyService = new CurrencyExchangeService();

// Fetch exchange rates for a specific base currency
router.get("/exchange-rates/:baseCurrency", async (req, res) => {
  const { baseCurrency } = req.params;

  try {
    const rates = await currencyService.fetchExchangeRates(baseCurrency);
    res.json(rates);
  } catch (error: any) {
    console.error("Error fetching exchange rates:", error.message);
    res.status(500).json({ error: "Failed to fetch exchange rates." });
  }
});

// Convert an amount from one currency to another
router.post("/convert", async (req, res) => {
  const { baseCurrency, targetCurrency, amount } = req.body;

  try {
    const convertedAmount = await currencyService.convertAmount(baseCurrency, targetCurrency, amount);
    res.json(convertedAmount);
  } catch (error: any) {
    console.error("Error converting currency:", error.message);
    res.status(500).json({ error: "Failed to convert currency." });
  }
});

export default router;
