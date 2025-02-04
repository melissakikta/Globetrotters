import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerUser } from "./src/controllers/userController";
dotenv.config();
console.log('Hello World');
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.post("/register", registerUser);
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
