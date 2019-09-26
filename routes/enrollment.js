var express = require('express');
var router = express.Router();
let Enrollment = require('../models/Enrollment');

/* GET all enrollment listings. */
router.get('/', (req, res, next) => {
  Enrollment.find({})
    .then((enrollments) => {
      return res.json(enrollments);
    })
    .catch((err) => {
      return res.status(500).json({error: "Error reading Enrollment: " + err});
    });
});

/* GET enrollment listing. */
router.get('/:id', (req, res, next) => {

  const id = req.params.id;
  const params = {id: id};

  Enrollment.findOne(params)
    .then((enrollment) => {
      return res.json(enrollment);
    })
    .catch((err) => {
      return res.status(500).json({error: "Error reading Enrollment: " + id + ":" + err});
    });
});

module.exports = router;
