import { Sequelize } from "sequelize";

// Create a new Sequelize instance
const db = new Sequelize(process.env.DB_NAME || "database", process.env.DB_USER || "user", process.env.DB_PASSWORD || "password", {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432, // Use 3306 for MySQL or 5432 for PostgreSQL
  dialect: "postgres", // Change to 'mysql' if using MySQL
  logging: false,
});

// Test the connection
const connectDB = async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

connectDB();

// Export the sequelize instance
export default db;
