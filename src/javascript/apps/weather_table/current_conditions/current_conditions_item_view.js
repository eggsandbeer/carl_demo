var Marionette = require('backbone.marionette');
var commands = require('./../../../config/commands');
var CurrentConditionsItemsTemplate = require('./templates/current_conditions_item_template.hbs');

var CurrentConditionsItemView = Marionette.ItemView.extend({
  template: CurrentConditionsItemsTemplate,
  tagName: "li",
  events: {
    'click': 'triggerModal'
  },
  triggerModal: function() {
    commands.execute('modal:show:moreconditions', this.model, 'current_condition');
  }
});

module.exports = CurrentConditionsItemView;
