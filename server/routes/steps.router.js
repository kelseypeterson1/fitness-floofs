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
}); // END GET route

// POST route - when a new user registers, this will create a row for them in the db
router.post('/:id', (req, res) => {
  let idToUpdate = req.params.id;
  console.log(`Adding new row for new user`, idToUpdate);

  let queryText = `INSERT INTO "steps" ("user_id") VALUES ($1);`;

  pool.query(queryText, [idToUpdate])
      .then(() => res.sendStatus(200))
      .catch(error => {
          console.log(`Error adding feedback`, error);
          res.sendStatus(500);
      });
}); // END POST route

module.exports = router;