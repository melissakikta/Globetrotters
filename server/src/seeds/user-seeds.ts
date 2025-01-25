import bcrypt from 'bcrypt';
import User from '../models/userModel';

export const seedUsers = async (): Promise<void> => {
  try {
    const users = [
      { username: 'JollyGuru', password: bcrypt.hashSync('password', 10) },
      { username: 'SunnyScribe', password: bcrypt.hashSync('password', 10) },
      { username: 'RadiantComet', password: bcrypt.hashSync('password', 10) },
    ];

    await User.bulkCreate(users, { individualHooks: true });
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};