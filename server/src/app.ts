import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routes/api/userRoutes';
// import { registerUser } from "./server/src/controllers/userController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});