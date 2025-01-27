import axios from "axios";
import { apiConfig } from "./ApiConfig";
import dotenv from "dotenv";
dotenv.config();

export interface ExchangeRateResponse {
  base: string; 
  date: string; 
  rates: { [currency: string]: number }; 
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
      const response = await axios.get<ExchangeRateResponse>(`${this.baseUrl}/latest`, {
        params: {
          access_key: this.apiKey,
          base: baseCurrency,
        },
      });
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
    const exchangeRates = await this.fetchExchangeRates(baseCurrency);
    const rate = exchangeRates.rates[targetCurrency];

    if (!rate) {
      throw new Error(`Exchange rate not available for ${targetCurrency}`);
    }

    return amount * rate;
  }
}
