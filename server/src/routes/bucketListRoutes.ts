import express, { Request, Response } from 'express';
import BucketListModel from '../models/bucketListModel';
import auth from '../middleware/authenticate';

// Define an interface for the user data attached to the request
interface UserRequest extends Request {
  user?: { userId: number; username: string }; // You can add more properties if needed
}

const router = express.Router();

// POST: Create new bucket list item
router.post('/bucketlist', auth, async (req: UserRequest, res: Response) => {
  const { country, item } = req.body;
  const userId = req.user?.userId; // Get user ID from the authenticated JWT token
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const newItem = await BucketListModel.create(userId, country, item);
    return res.json(newItem);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});

// GET: Get all bucket list items for a user
router.get('/bucketlist', auth, async (req: UserRequest, res: Response) => {
  const userId = req.user?.userId; // Get user ID from the authenticated JWT token
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const items = await BucketListModel.getAll(userId);
    return res.json(items);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});

// PUT: Update a bucket list item
router.put('/bucketlist/:id', auth, async (req: UserRequest, res: Response) => {
  const { country, item } = req.body;
  const { id } = req.params;
  const numericId = parseInt(id, 10);

  try {
    const updatedItem = await BucketListModel.update(numericId, country, item);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE: Delete a bucket list item
router.delete('/bucketlist/:id', auth, async (req: UserRequest, res: Response) => {
  const { id } = req.params;

  try {
    const numericId = parseInt(id, 10);
    const deletedItem = await BucketListModel.delete(numericId);
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
