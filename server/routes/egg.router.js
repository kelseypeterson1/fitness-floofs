const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET egg for user from db
router.get('/:id', (req, res) => {
  let userId = req.params.id;
  const query = `SELECT * FROM "egg" WHERE "user_id" = $1;`;
  pool.query(query, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting egg from DB`, error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

// PUT route - changing egg
router.put('/:id', (req, res) => {
  console.log('clientId is', clientId);

  // getting step data from server
  let clientId = req.params.id;
  let sqlText = `SELECT "steps" FROM "steps" WHERE "user_id" = $1;`
  pool.query(sqlText, clientId)
    .then(result => {
      console.log('database processed PUT request', result)
      res.sendStatus(200);
    }).catch(err => {
      console.log('database was not updated for PUT request', err)
      res.sendStatus(500);
    })


    
}) // END PUT Route

module.exports = router;
