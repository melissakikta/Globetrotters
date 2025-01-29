import axios from "axios";
import { apiConfig } from "./ApiConfig.js";

export interface ExchangeRateResponse {
  base: string; 
  date: string; 
  conversion_rates: { [currency: string]: number }; 
}


export class CurrencyExchangeService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = apiConfig.apiKey;
    this.baseUrl = apiConfig.baseUrl;
  }


  async fetchExchangeRates(baseCurrency: string): Promise<ExchangeRateResponse> {
    try {
      const response = await axios.get<ExchangeRateResponse>(`${this.baseUrl}/${this.apiKey}/latest/${baseCurrency}`);
      
      const conversion_rates = response.data.conversion_rates;  
      if (!conversion_rates) {throw new Error("No conversion rates found");}
      
      return response.data;
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      throw new Error("Failed to fetch exchange rates.");
    }
  }


  async convertAmount(
    baseCurrency: string,
    targetCurrency: string,
    amount: number
  ): Promise<number> {
    // console.log(baseCurrency, targetCurrency, amount)
    const exchangeRates = await this.fetchExchangeRates(baseCurrency);
    // console.log(exchangeRates);
    const rate = exchangeRates.conversion_rates[targetCurrency];

    if (!rate) {
      throw new Error(`Exchange rate not available for ${targetCurrency}`);
    }

    return amount * rate;
  }
}
