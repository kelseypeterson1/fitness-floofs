const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET floof types from db
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

// GET specific floof from DB based on id
router.get('/:id', (req, res) => {
    let floofId = req.params.id;
    const query = `SELECT * FROM "flock" WHERE "id" = $1;`;
    pool.query(query, [floofId])
      .then(result => {
        res.send(result.rows[0])
      })
      .catch(error => {
        console.log(`Error getting selected floof data from DB`, error);
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
