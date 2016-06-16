var Marionette = require('backbone.marionette');
var CurrentConditionsModalTemplate = require('./templates/current_conditions_modal_template.hbs');

var CurrentConditionsModalItemView = Marionette.ItemView.extend({
  template: CurrentConditionsModalTemplate,
  tagName: "div"
});

module.exports = CurrentConditionsModalItemView;
