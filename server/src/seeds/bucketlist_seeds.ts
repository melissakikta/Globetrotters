import BucketListModel from '../models/bucketListModel';

export const bucketlistSeeds = async (): Promise<void> => {
  const seedData = [
    { userId: 1, country: 'France', item: 'Visit Eiffel Tower' },
    { userId: 2, country: 'Japan', item: 'See cherry blossoms' },
  ];

  try {
    for (const seed of seedData) {
      await BucketListModel.create(seed.userId, seed.country, seed.item);
    }
    console.log('Bucket list seeds successfully added.');
  } catch (error) {
    console.error('Error seeding bucket list:', error);
  }
};

export default bucketlistSeeds;
