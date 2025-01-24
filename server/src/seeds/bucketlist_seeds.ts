import { BucketListModel } from '../models/bucketListModel';

export const bucketlistSeeds = async () => {
  await BucketListModel.bulkCreate([
    { "country": "France", "item": "Visit Eiffel Tower" },
    { "country": "Japan", "item": "See cherry blossoms" }
  ])
};
