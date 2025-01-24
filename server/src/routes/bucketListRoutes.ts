const express = require('express');
const router = express.Router();
const BucketList = require('./bucketListModel');
//const jwt = require('jsonwebtoken');
const auth = require('./middleware/authenticate');

// POST: Create new bucket list item
router.post('/bucketlist', auth, async (req, res) => {
  const { country, item } = req.body;
  const userId = req.user.id; // Get user ID from the authenticated JWT token

  try {
    const newItem = await BucketList.create(userId, country, item);
    res.json(newItem.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Get all bucket list items for a user
router.get('/bucketlist', auth, async (req, res) => {
  const userId = req.user.id; // Get user ID from the authenticated JWT token

  try {
    const items = await BucketList.getAll(userId);
    res.json(items.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update a bucket list item
router.put('/bucketlist/:id', auth, async (req, res) => {
  const { country, item } = req.body;
  const { id } = req.params;

  try {
    const updatedItem = await BucketList.update(id, country, item);
    res.json(updatedItem.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete a bucket list item
router.delete('/bucketlist/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await BucketList.delete(id);
    res.json(deletedItem.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;