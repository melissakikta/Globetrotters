import db from './db'; // Your Sequelize instance
import { QueryTypes } from 'sequelize'; // Import QueryTypes directly

export interface BucketListItem {
  id: number;
  userId: number;
  country: string;
  item: string;
}

const BucketListModel = {
  // Create a new bucket list item
  create: async (userId: number, country: string, item: string): Promise<BucketListItem | null> => {
    try {
      const result = await db.query(
        'INSERT INTO bucket_list (user_id, country, item) VALUES (:userId, :country, :item) RETURNING *',
        {
          replacements: { userId, country, item },
          type: QueryTypes.INSERT, // Use QueryTypes.INSERT for insert operations
        }
      );

      // Check and return the result
      if (result && result[0]) {
        return result[0] as unknown as BucketListItem;
      }
      return null; // Handle no result case
    } catch (error) {
      console.error('Error creating bucket list item:', error);
      throw new Error('Failed to create bucket list item');
    }
  },

  // Get all bucket list items for a user
  getAll: async (userId: number): Promise<BucketListItem[]> => {
    try {
      const result = await db.query<BucketListItem>(
        'SELECT * FROM bucket_list WHERE user_id = :userId ORDER BY id ASC',
        {
          replacements: { userId },
          type: QueryTypes.SELECT, // Use QueryTypes.SELECT for select operations
        }
      );

      return result as BucketListItem[];
    } catch (error) {
      console.error('Error fetching bucket list items:', error);
      throw new Error('Failed to fetch bucket list items');
    }
  },

  // Update an existing bucket list item
  update: async (itemId: number, country: string, item: string): Promise<BucketListItem | null> => {
    try {
      const result = await db.query(
        'UPDATE bucket_list SET country = :country, item = :item WHERE id = :itemId RETURNING *',
        {
          replacements: { itemId, country, item },
          type: QueryTypes.UPDATE, // Use QueryTypes.UPDATE for update operations
        }
      );

      // Check and return the result
      if (result && result[0]) {
        return result[0] as BucketListItem;
      }
      return null; // Handle no result case
    } catch (error) {
      console.error('Error updating bucket list item:', error);
      throw new Error('Failed to update bucket list item');
    }
  },

  // Delete a bucket list item
  delete: async (itemId: number): Promise<BucketListItem | null> => {
    try {
      const result = await db.query<BucketListItem>(
        'DELETE FROM bucket_list WHERE id = :itemId RETURNING *',
        {
          replacements: { itemId },
          type: QueryTypes.SELECT, // Use QueryTypes.SELECT to return the deleted item
        }
      );

      // Check and return the result
      if (result && result.length > 0) {
        return result[0];
      }
      return null; // Handle no result case
    } catch (error) {
      console.error('Error deleting bucket list item:', error);
      throw new Error('Failed to delete bucket list item');
    }
  },
};

export default BucketListModel;
