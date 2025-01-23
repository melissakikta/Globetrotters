const db = require('./db'); // Make sure you export your database connection

const BucketListModel = {
  create: (userId, country, item) => {
    return db.query(
      'INSERT INTO bucket_list (user_id, country, item) VALUES ($1, $2, $3) RETURNING *',
      [userId, country, item]
    );
  },

  getAll: (userId) => {
    return db.query('SELECT * FROM bucket_list WHERE user_id = $1', [userId]);
  },

  update: (itemId, country, item) => {
    return db.query(
      'UPDATE bucket_list SET country = $1, item = $2 WHERE id = $3 RETURNING *',
      [country, item, itemId]
    );
  },

  delete: (itemId) => {
    return db.query('DELETE FROM bucket_list WHERE id = $1 RETURNING *', [itemId]);
  }
};

module.exports = BucketListModel;