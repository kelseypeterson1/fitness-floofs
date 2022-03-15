const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET steps for user from db
router.get('/:id', (req, res) => {
  console.log('req.params is', req.params)
  let userId = req.params.id;
  const query = `SELECT "steps" FROM "steps" WHERE "user_id" = $1;`;
  pool.query(query, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting steps from DB`, error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;