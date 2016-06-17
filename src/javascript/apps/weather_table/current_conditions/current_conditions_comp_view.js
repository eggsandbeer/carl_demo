var Marionette = require('backbone.marionette');

var CurrentConditionsItemView = require('./current_conditions_item_view');
var CurrentConditionsItemViewEmpty = require('./current_conditions_item_view_empty');
var CurrentConditionsCompTemplate = require('./templates/current_conditions_comp_template.hbs');

CurrentConditionsCompView = Marionette.CompositeView.extend({
  template: CurrentConditionsCompTemplate,
  childView: CurrentConditionsItemView,
  emptyView: CurrentConditionsItemViewEmpty,
  childViewContainer: "ul",
  className: 'zero-opacity',
  onRender: function(){
    setTimeout(function(){
      this.$el.removeClass('zero-opacity');
    }.bind(this), 100);
  }
});

module.exports = CurrentConditionsCompView;
