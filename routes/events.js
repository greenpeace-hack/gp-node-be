var express = require('express');
var router = express.Router();
let Events = require('../models/Event');

/* GET all supporter listings. */
router.get('/', (req, res, next) => {
  Events.find({})
    .then((events) => {
      return res.json(events);
    })
    .catch((err) => {
      return res.status(500).json({error: "Error reading events: " + err});
    });
});

/* GET supporter listing. */
router.get('/category/:category', (req, res, next) => {

  const category = req.params.category;
  const params = {categories: category};

  Events.findOne(params)
    .then((event) => {
      return res.status(200).json(event);
    })
    .catch((err) => {
      return res.status(500).json({error: "Error reading category: " + category + ":" + err});
    });
});
module.exports = router;
