import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config(); // Import the dotenv module

// Validate environment variables
const db = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );


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
