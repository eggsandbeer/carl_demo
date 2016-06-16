var Marionette = require('backbone.marionette');

var ModalLayoutTemplate = require('./templates/modal_layout.hbs');

ModalLayout = Marionette.LayoutView.extend({
  template: ModalLayoutTemplate,
  regions: {
    NestedModalView: '#NestedModalView'
  },
  events: {
    'click button' : 'emptyModalRegion',
    'click .back-drop' : 'emptyModalRegion'
  },
  emptyModalRegion: function() {
    $(window.carl.ModalRegion.el).empty();
  }
})

module.exports = ModalLayout;
