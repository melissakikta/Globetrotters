import { bucketlistSeeds } from './bucketlist_seeds.js';
import { seedUsers } from './user-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await bucketlistSeeds();
    console.log('\n----- Bucket List Seeded -----\n');
    
    await seedUsers();
    console.log('\n----- Users Seeded -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
