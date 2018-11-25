
var Marionette = require('backbone.marionette');

var PostForm = Marionette.LayoutView.extend({
  tagName: 'form',
  template: require('../templates/postForm.html'),

  triggers: {
    submit: 'add:post'
  },

  modelEvents: {
    change: 'render'
  },

  ui: {
    postTitle: '#postTitle',
    postBody: '#postBody'
  }
});

module.exports = PostForm;
