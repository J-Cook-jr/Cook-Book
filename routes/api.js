
const express = require('express');
const router = express.Router();
const db = require('../models')

/* GET users listing. */
router.get('/recipes', function (req, res, next) {
  db.Recipes.findAll({
    include: [db.Categories]
  })
    .then(data => {
      res.json(data);
    })

});

module.exports = router;
