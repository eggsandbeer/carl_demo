var Marionette = require('backbone.marionette');

var LoadingView = Marionette.ItemView.extend({
  template: function(){
    return "<div class='sp sp-volume'></div>"
  },
  tagName: "div",
  className: 'spinner-container zero-opacity',
  onDestroy: function(){
    this.$el.addClass('zero-opacity');
  },
  onRender: function(){
    setTimeout(function(){
      this.$el.removeClass('zero-opacity');
    }.bind(this), 50);

    if(this.options.addClassName){
      this.$el.addClass(this.options.addClassName)
      // this.$el.className = this.options.addClassName+' '+this.className
    }
  }
});

module.exports = LoadingView;
