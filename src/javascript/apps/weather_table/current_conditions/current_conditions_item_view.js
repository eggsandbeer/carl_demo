var Marionette = require('backbone.marionette');
var CurrentConditionsItemsTemplate = require('./templates/current_conditions_item_template.hbs');

var CurrentConditionsItemView = Marionette.ItemView.extend({
  template: CurrentConditionsItemsTemplate,
  tagName: "li",
  events: {
    'click': 'triggerConditionsModal'
  },
  triggerConditionsModal: function() {
    this.trigger("moreconditions:modal", this.model);
  }
});

module.exports = CurrentConditionsItemView;
