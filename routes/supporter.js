var express = require('express');
var router = express.Router();
let Supporter = require('../models/Supporter');

/* GET all supporter listings. */
router.get('/', (req, res, next) => {
  Supporter.find({})
    .then((supporters) => {
      return res.json(supporters);
    })
    .catch((err) => {
      return res.status(500).json({error: "Error reading supporters: " + err});
    });
});

/* GET supporter listing. */
router.get('/:id', (req, res, next) => {

  const id = req.params.id;
  const params = {id: id};

  Supporter.findOne(params)
    .then((supporter) => {
      return res.json(supporter);
    })
    .catch((err) => {
      return res.status(500).json({error: "Error reading supporter: " + id + ":" + err});
    });
});

module.exports = router;
