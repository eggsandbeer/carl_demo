var Marionette = require('backbone.marionette');
var CurrentConditionsCompView = require('./current_conditions_comp_view');
var reqres = require('./../../../config/reqres');
var commands = require('./../../../config/commands');

// include API to make requests include
require('./../../../entities/weather_table/current_conditions_api');

var CurrentConditionsController = Marionette.Controller.extend({
  start: function(weather_table_layout){
    // Hardcoded, should be changed so that it's tried into a nav or menu or something.
    var request_cities = ['Canada/Vancouver','WA/Seattle','Canada/Toronto'];
    var requestCurrentConditions = reqres.request('weathertable:get:currentconditions', request_cities);

    $.when(requestCurrentConditions).done(function(current_conditions_collection) {
      // Need some error handling here for models we get back from API. Loops over, check if they are valid.
      var current_conditions_comp_view = new CurrentConditionsCompView({collection: current_conditions_collection});
      weather_table_layout.CurrentConditionsRegion.show(current_conditions_comp_view);

      current_conditions_comp_view.on('childview:moreconditions:modal', function(childview, model){
        commands.execute('modal:show:moreconditions', model, 'current_condition');
      });
    });
  }
});

module.exports = CurrentConditionsController;
