var Marionette = require('backbone.marionette');

var reqres = require('./../../config/reqres');
var commands = require('./../../config/commands');

var WeatherTableLayout = require('./weather_table_layout');
var CurrentConditionsController = require('./current_conditions/current_conditions_controller');


var WeatherTableRouter = Marionette.AppRouter.extend({
  appRoutes: {
    'weatherdata' : 'getWeatherData'
  }
});

var API = {
  getWeatherData: function(){
    var weather_table_layout = new WeatherTableLayout();
    var current_conditions_controller = new CurrentConditionsController();

    window.carl.ContentRegion.show(weather_table_layout);

    current_conditions_controller.start(weather_table_layout)
  }
}

WeatherTableModule = Marionette.Module.extend({
  // make sure the module does not start on app initialization
  startWithParent: true,
  // flag to tell if module is started
  _started: true,
  initialize: function(){
    commands.setHandler('weather_data:show', function(){
      API.getWeatherData();
      this.router = new WeatherTableRouter({ controller: API });
    });
  }
})
module.exports = WeatherTableModule;
