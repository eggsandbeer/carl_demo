var Backbone = require('backbone');
var CurrentConditionsModel = require('./current_conditions_model');

CurrentConditionsCollection = Backbone.Collection.extend({
  model: CurrentConditionsModel,
  url: 'never_call'
});

module.exports = CurrentConditionsCollection;
