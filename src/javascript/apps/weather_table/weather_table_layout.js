var Marionette = require('backbone.marionette');

var WeatherTableTemplate = require('./weather_table_layout_template.hbs');

WeatherTableLayout = Marionette.LayoutView.extend({
  regions: {
    CurrentConditionsRegion: '#CurrentConditionsRegion'
  },
  template: WeatherTableTemplate,
})

module.exports = WeatherTableLayout;
