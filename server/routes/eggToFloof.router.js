const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET floof from db based on egg id
router.get('/:id', (req, res) => {
    console.log('EGG ID IS:', req.params.id)
  let eggId = req.params.id;
  const query = `SELECT "id" FROM "floofs" WHERE "egg_id" = $1;`;
  pool.query(query, [eggId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting egg from DB`, error);
      res.sendStatus(500);
    });
}); // END GET Route

// PUT route - change egg status
router.put('/:id', (req, res) => {
  const steps = req.body.stepsDetail.steps

  // check what egg status should be
  function checkStatus(steps) {
    if (steps > 10000) {
      return 3;
    } else if (steps > 5000) {
      return 2;
    } else {
      return 1;
    }
  }
  const status = checkStatus(steps)

  let idToUpdate = req.params.id;

  let sqlText = `
      UPDATE "egg"
      SET "status" = $2
      WHERE id = $1;
  `
  let sqlValues = [idToUpdate, status];

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