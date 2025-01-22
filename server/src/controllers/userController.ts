import { Request, Response } from "express";
import { getUserByUserName, createUser } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a user
export async function registerUser(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;

  try {
    const existingUser = await getUserByUserName(username);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, hashedPassword);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}