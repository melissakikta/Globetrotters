import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config(); // Import the dotenv module

// Validate environment variables
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD ) {
  throw new Error(
    "Missing required environment variables: DB_NAME, DB_USER, DB_PASSWORD, or DB_HOST"
  );
}

// Create a new Sequelize instance
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost', // Default to localhost
  port: 5432, // Default to PostgreSQL's port
  dialect: "postgres", // Specify your database type
  logging: false, // Disable query logging
});

// Test the connection (optional but recommended)
export const connectDB = async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Export the Sequelize instance
export default db;
