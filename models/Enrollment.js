const mongoose = require('mongoose');

let Enrollment = mongoose.model('Enrollment', {
  supporterId: String,
  eventId: String,
  endDate: Date
});

module.exports = Enrollment;
