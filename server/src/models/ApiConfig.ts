export interface ApiConfig {
    apiKey: string;
    baseUrl: string;
  }
  
  export const apiConfig: ApiConfig = {
    apiKey: process.env.API_KEY || "your-default-api-key",
    baseUrl: "https://v6.exchangerate-api.com/"
  };
  
  