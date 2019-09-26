/**
 * DB Seeder - seeds MongoDB with documents from `users.json` on disk
 *
 * To seed, run `npm run-script seed`
 */

var seeder = require('mongoose-seed');

var seed = function(cb) {

  seeder.connect('mongodb://localhost/planet4', function() {

    // Load the User model
    seeder.loadModels([
      // 'models/user.js',
      'models/Enrollment.js',
      'models/Event.js',
      'models/Supporter.js'
    ]);

    // Drop existing  documents
    seeder.clearModels(['Enrollment', 'Event', 'Supporter'], function() {

      seeder.populateModels(require('./supporter.json'), function(err) {
        if (err) {
          console.error('Error seeding supporter', err);
          if (require.main === module) {
            return process.exit(1);
          } else {
            return cb(err);
          }
        }

        console.log('Seeding supporter done.');
        if (require.main === module) {
          process.exit(0);
        } else {
          return cb();
        }
      });


      seeder.populateModels(require('./enrollment.json'), function(err) {
        if (err) {
          console.error('Error seeding enrollment', err);
          if (require.main === module) {
            return process.exit(1);
          } else {
            return cb(err);
          }
        }

        console.log('Seeding enrollment done.');
        if (require.main === module) {
          process.exit(0);
        } else {
          return cb();
        }
      });


      seeder.populateModels(require('./events.json'), function(err) {
        if (err) {
          console.error('Error seeding events events', err);
          if (require.main === module) {
            return process.exit(1);
          } else {
            return cb(err);
          }
        }

        console.log('Seeding events done.');
        if (require.main === module) {
          process.exit(0);
        } else {
          return cb();
        }
      });

    });
  });
};

seed(function() {
  console.log('Seeding complete, exiting.');
});