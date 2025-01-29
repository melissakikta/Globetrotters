import axios from "axios";

export interface ExchangeRateResponse {
  base: string;
  date: string;
  conversion_rates: { [currency: string]: number };
}

export const fetchExchangeRates = async (baseCurrency: string): Promise<ExchangeRateResponse> => {
  try {
    const response = await axios.get<ExchangeRateResponse>(`/api/currency/exchange-rates/${baseCurrency}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch exchange rates.");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw new Error("Failed to fetch exchange rates.");
  }
};

export const convertAmount = async (
  baseCurrency: string,
  targetCurrency: string,
  amount: number
): Promise<number> => {
  try {
    const response = await axios.post<{ convertedAmount: number }>("/api/currency/convert", {
      baseCurrency,
      targetCurrency,
      amount,
    });
    return response.data.convertedAmount;
  } catch (error) {
    console.error("Error converting currency:", error);
    throw new Error("Failed to convert currency.");
  }
};
