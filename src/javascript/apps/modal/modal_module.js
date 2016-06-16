var Marionette = require('backbone.marionette');

var ModalController = require('./modal_controller');

ModalModule = Marionette.Module.extend({
  onStart: function(){
    var modal_controller = new ModalController();

    modal_controller.start();
  }
});

module.exports = ModalModule;
