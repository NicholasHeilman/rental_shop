const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//routes will go here

//GET Tools
router.get('/tool', (req, res) => {
    const queryText = `SELECT * FROM "tool"`;
    pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => { 
      console.log('Something went wrong in GET user', error);
      res.sendStatus(500);
     });
  });

module.exports = router;