import React, { useState } from "react";
import { login } from "../services/authService";

const LoginPage: React.FC = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userToken = await login(username, password);
      setToken(userToken);
      alert("Login successful!");
      localStorage.setItem("authToken", userToken); // Store token for future use
    } catch (error) {
      alert("Error during login: " + error.message);
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