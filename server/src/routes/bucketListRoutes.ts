import express from 'express';
import BucketListModel from '../models/bucketListModel';
//import jwt from 'jsonwebtoken';
import auth from '../middleware/authenticate';

const router = express.Router();

// POST: Create new bucket list item
router.post('/bucketlist', auth, async (req, res) => {
  const { country, item } = req.body;
  const userId = req.user.id; // Get user ID from the authenticated JWT token

  try {
    const newItem = await BucketListModel.create(userId, country, item);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Get all bucket list items for a user
router.get('/bucketlist', auth, async (req, res) => {
  const userId = req.user.id; // Get user ID from the authenticated JWT token

  try {
    const items = await BucketListModel.getAll(userId);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update a bucket list item
router.put('/bucketlist/:id', auth, async (req, res) => {
  const { country, item } = req.body;
  const { id } = req.params;

  try {
    const updatedItem = await BucketListModel.update(id, country, item);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete a bucket list item
router.delete('/bucketlist/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await BucketListModel.delete(id);
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;