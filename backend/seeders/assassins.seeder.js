var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../server/models');

var data = [{

}];

var AssassinsSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },
  run: function () {
    return Model.create(data);
  }
});

module.exports = AssassinsSeeder;
