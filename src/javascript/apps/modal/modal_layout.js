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
    this.$el.removeClass('show');
    setTimeout(function(){
      $(window.carl.ModalRegion.el).empty();
    }, 500);
  },
  onShow: function(){
    setTimeout(function(){
      this.$el.addClass('show');
    }.bind(this), 100);
  }
})

module.exports = ModalLayout;
