$ = jQuery = require('jquery');
var Marionette = require('backbone.marionette');


// var app = require('./app/app')
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

    // Carl.startSubApp = function(appName, args){
    //   // var currentApp = Marlin.module(appName);
    //   // if (Marlin.currentApp === currentApp){ return; }
    //   //
    //   if (Carl.currentApp){
    //     Carl.currentApp.stop();
    //   }
    //   //
    //   // Marlin.currentApp = currentApp;
    //   // currentApp.start(args);
    // };

    Carl.addRegions({
      ContentRegion: '#ContentRegion',
      NotificationRegion: '#NotificationRegion',
      ModalRegion: '#ModalRegion',
      SideNavRegion: '#SideNavRegion'
    });

    Carl.on('before:start', function (options) {

    });

    Carl.on('start', function() {

      // commands.setHandler('main:navigate', function(name){
      //   Carl.navigate(name);
      // });

      if(Backbone.history){
        Backbone.history.start();
        if(Carl.getCurrentRoute() === "" || Carl.getCurrentRoute() === undefined){
          commands.execute('weather_data:show');
        }
      }
    });
    return Carl;
  }
}
module.exports.init();
