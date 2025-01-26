import React, { useState } from "react";
import { login } from "../utils/authService";

const LoginPage: React.FC = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userToken = await login(username, password);
      setToken(userToken);
      alert("Login successful!");
      localStorage.setItem("authToken", userToken); // Store token for future use
    } catch (error) {
      if (error instanceof Error) {
        alert("Error during login: " + error.message);
      } else {
        alert("An unknown error occurred during login.");
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default LoginPage;