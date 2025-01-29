import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerUser } from "./controllers/userController.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/register", registerUser);
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});