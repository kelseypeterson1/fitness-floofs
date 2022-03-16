const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET floofs for user from db
router.get('/', (req, res) => {
  const query = `SELECT * FROM "floofs";`;
  pool.query(query)
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting floofs from DB`, error);
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
