const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET floof from db based on egg id
router.get('/:id', (req, res) => {
    console.log('EGG ID IS:', req.params.id.id)
  let eggId = req.params.id.id;
  const query = `SELECT "id" FROM "floofs" WHERE "egg_id" = $1;`;
  pool.query(query, [eggId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting egg from DB`, error);
      res.sendStatus(500);
    });
});

module.exports = router;