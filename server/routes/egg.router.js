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

// PUT route - rename floof
router.put('/:id', (req, res) => {
  console.log('req.body in egg PUT request is', req.body);

  let idToUpdate = req.params.id;
  console.log('idToUpdate is', idToUpdate);

  let currentDate = req.body.date;
  console.log('current date is', currentDate);

  let newEgg = req.body.newEgg;
  console.log('new egg id is', newEgg);
  
  let sqlText = `
      UPDATE "egg"
      SET "date" = $2,
      "status" = '1',
      "egg_id" = $3
      WHERE user_id = $1;
  `
  let sqlValues = [idToUpdate, currentDate, newEgg];

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
