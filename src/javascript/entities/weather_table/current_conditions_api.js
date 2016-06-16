var reqres = require('./../../config/reqres');
var CurrentConditionsCollection = require('./current_conditions_collection');
var CurrentConditionsModel = require('./current_conditions_model');

var API = {
  getCurrentConditions: function(request_cities){
    var count = 0;
    var defer = $.Deferred();
    var current_conditions = new CurrentConditionsCollection()

    request_cities.forEach(function(city){
      var current_condition = new CurrentConditionsModel({
        city_code: city
      });
      current_conditions.push(current_condition);
    });

    current_conditions.each(function(d){
      d.fetch({
        success: function(data) {
          count++;
          if(count === request_cities.length){
            defer.resolve(current_conditions)
          }
        },
        error: function(data) {
          count++;
          if(count === request_cities.length){
            defer.resolve(current_conditions)
          }
        }
      });
    });

    var promise = defer.promise();
    return promise;
  }
}

module.exports = (function(){
  reqres.setHandler("weathertable:get:currentconditions", function(request_cities){
    return API.getCurrentConditions(request_cities);
  });
})();
