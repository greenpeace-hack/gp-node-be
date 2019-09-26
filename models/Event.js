const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = mongoose.model('Event', {
  description: String,
  id: String,
  title: String,
  categories: [Schema.Types.Mixed],
  location: String
});

module.exports = Event;
