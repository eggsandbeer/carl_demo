$ = jQuery = require('jquery');
var Marionette = require('backbone.marionette');

var reqres = require('./config/reqres');
var commands = require('./config/commands');

var WeatherTableModule = require('./apps/weather_table/weather_table_module');
var Modal = require('./apps/modal/modal_module');

module.exports = {
  init: function(){
    var self = this;
    $(document).ready(function(){
      window.carl = self.initCarl();
      window.carl.start();
    });
  },
  initCarl: function(){
    var Carl = new Marionette.Application();

    Carl.module('weather_data', WeatherTableModule);
    Carl.module('modal', Modal);

    Carl.navigate = function(route, options){
      options || (options = {});
      Backbone.history.navigate(route, options);
    };

    Carl.getCurrentRoute = function(){
      return Backbone.history.fragment;
    };

    Carl.addRegions({
      ContentRegion: '#ContentRegion',
      NotificationRegion: '#NotificationRegion',
      ModalRegion: '#ModalRegion'
    });

    Carl.on('start', function() {

      commands.setHandler('main:navigate', function(name){
        Carl.navigate(name);
      });

      Backbone.history.start();
      if(Carl.getCurrentRoute() === "" || Carl.getCurrentRoute() === undefined){
        commands.execute('weather_table:show');
      }

    });
    return Carl;
  }
}
module.exports.init();
