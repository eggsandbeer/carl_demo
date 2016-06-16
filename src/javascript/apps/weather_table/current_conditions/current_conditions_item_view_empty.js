var Marionette = require('backbone.marionette');

var ItemsTemplate = require('./templates/current_conditions_item_template_empty.hbs');
var CurrentConditionsItemView = Marionette.ItemView.extend({
  template: ItemsTemplate,
  tagName: "li"
});

module.exports = CurrentConditionsItemView;
