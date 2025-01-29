import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerUser } from "./controllers/userController.js";
import routes from "./routes/index.js";
import db from "./models/db.js";

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
db.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});