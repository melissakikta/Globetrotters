import axios from "axios";

const API_URL = "http://localhost:5000"; // Your backend base URL

export const register = async (username: string, password: string): Promise<void> => {
  await axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username: string, password: string): Promise<string> => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data.token; // Assuming your backend sends a token in the response
};