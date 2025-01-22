import pool from "../config/users_db";

// Define a User interface for type safety
interface User {
  id: number;
  username: string;
  password: string;
}

export async function getUserByUserName(username: string): Promise<User | null> {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
  return result.rows[0] || null;
}

export async function createUser(username: string, hashedPassword: string): Promise<void> {
  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hashedPassword]);
}