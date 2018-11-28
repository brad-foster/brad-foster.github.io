
var Marionette = require('backbone.marionette');

var Post = Marionette.View.extend({
	tagName: 'div',
	template: require('../templates/post.html')
});

var PostContainer = Marionette.CollectionView.extend({
  tagName: 'div',
  childView: Post
});

module.exports = PostContainer;
