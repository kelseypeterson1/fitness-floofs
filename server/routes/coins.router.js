const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET coins for user from db
router.get('/:id', (req, res) => {
  let userId = req.params.id;
  const query = `SELECT * FROM "coins" WHERE "user_id" = $1;`;
  pool.query(query, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting coins from DB`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
