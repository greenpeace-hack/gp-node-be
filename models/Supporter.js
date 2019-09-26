const mongoose = require('mongoose');

let Supporter = mongoose.model('Supporter', {
  id: String,
  firstName: String,
  lastName: String,
  email: String
});

module.exports = Supporter;
