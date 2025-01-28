import { Request, Response } from "express";
import User from "../models/userModel.js"; // Make sure these functions are typed in your userModel.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Register a user
export async function registerUser(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.getUserByUserName(username);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.createUser(username, hashedPassword);

    // Create a JWT token (we're using the user ID as the payload)
    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username }, 
      JWT_SECRET, 
      { expiresIn: '1h' } // The token expires in 1 hour
    );

    // Send the response with the token
    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
