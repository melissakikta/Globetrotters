import dotenv from "dotenv";
dotenv.config();

export interface ApiConfig {
    apiKey: string;
    baseUrl: string;
  }
  
  export const apiConfig: ApiConfig = {
    apiKey: process.env.API_KEY || "your-default-api-key",
    baseUrl: process.env.API_BASE_URL || "https://api.exchangeratesapi.io",
  };
  
  