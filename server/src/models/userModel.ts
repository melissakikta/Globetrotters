import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './db.js'; // Import your Sequelize instance

// Define attributes for the User model
interface UserAttributes {
  id: number;
  username: string;
  password: string;
}

// Define creation attributes (optional id for auto-incremented fields)
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

// Extend Sequelize's Model class
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;

  // Static method to create a new user
  public static async createUser(username: string, password: string): Promise<User> {
    return await User.create({ username, password });
  }

  // Static method to get a user by username
  public static async getUserByUserName(username: string): Promise<User | null> {
    return await User.findOne({ where: { username } });
  }
}

// Initialize the model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Your Sequelize instance
    modelName: 'User',
    tableName: 'users',
    timestamps: true, // Enable createdAt and updatedAt
  }
);

export default User;
