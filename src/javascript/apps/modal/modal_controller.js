var Marionette = require('backbone.marionette');
var ModalLayout = require('./modal_layout');

var CurrentConditionsModalItemView = require('./current_conditions_modal_item_view');

var commands = require('./../../config/commands');

var ModalController = Marionette.Controller.extend({
  start: function(){
    commands.setHandler('modal:show:moreconditions', function(model, type){
      var modal_layout = new ModalLayout();

      window.carl.ModalRegion.show(modal_layout);

      switch(type) {
        case 'current_condition':
          var current_conditions_modal = new CurrentConditionsModalItemView({model: model});
          modal_layout.NestedModalView.show(current_conditions_modal);
        default:
      }
    });

  }
})

module.exports = ModalController;
