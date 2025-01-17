import dotenv from "dotenv";
dotenv.config();

import { CurrencyExchangeService } from "./models/CurrecyExchage";

const exchangeService = new CurrencyExchangeService();

(async () => {
  try {
    const rates = await exchangeService.fetchExchangeRates("EUR");
    console.log("Exchange Rates:", rates);

    const convertedAmount = await exchangeService.convertAmount("EUR", "USD", 100);
    console.log(`Converted Amount: $${convertedAmount}`);
  } catch (error) {
    console.error(error);
  }
})();