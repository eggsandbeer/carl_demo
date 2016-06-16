var Backbone = require('backbone');

var CurrentConditionsModel = Backbone.Model.extend({
  urlRoot: function(){
    return 'http://api.wunderground.com/api/6c26e6c606177691/conditions/q/'
  },
  url: function(){
    return this.urlRoot()+this.attributes.city_code+'.json'
  },
  parse: function(data){
    // Refactor needed to handle error responses and weirdo results from server.
    return data.current_observation;
  }
});

module.exports = CurrentConditionsModel;
