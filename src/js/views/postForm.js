
var Marionette = require('backbone.marionette');

var PostForm = Marionette.View.extend({
  tagName: 'form',

  template: require('../../html/templates/postForm.html'),

  triggers: {
    'click #addPost': 'add:post'
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
