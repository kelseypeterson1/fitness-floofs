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

// PUT route - update paid date to today's date
router.put('/:id', (req, res) => {
  console.log('req.body in PUT request is', req.body);

  let idToUpdate = req.params.id;
  console.log('idToUpdate is', idToUpdate);

  let paidDate = req.body.date;
  console.log('paidDate is', paidDate);
  
  let sqlText = `
      UPDATE "flock"
      SET "paid" = $2
      WHERE id = $1;
  `
  let sqlValues = [idToUpdate, paidDate];

  pool.query(sqlText, sqlValues)
    .then(result => {
      console.log('database processed PUT request', result)
      res.sendStatus(200);
    }).catch(err => {
      console.log('database was not updated for PUT request', err)
      res.sendStatus(500);
    })
}) // END PUT Route

// PUT route - reduce coins balance based on item purchased
router.put('/pay/:id', (req, res) => {
  console.log('req.body in PUT request is', req.body);

  let idToUpdate = req.params.id;
  console.log('idToUpdate is', idToUpdate);

  let amount = req.body.amount;
  console.log('amount is', amount);
  
  let sqlText = `
      UPDATE "coins"
      SET "coins" = "coins" - $2
      WHERE id = $1;
  `
  let sqlValues = [idToUpdate, amount];

  pool.query(sqlText, sqlValues)
    .then(result => {
      console.log('database processed PUT request', result)
      res.sendStatus(200);
    }).catch(err => {
      console.log('database was not updated for PUT request', err)
      res.sendStatus(500);
    })
}) // END PUT Route

module.exports = router;
