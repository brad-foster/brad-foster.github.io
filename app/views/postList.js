
var Marionette = require('backbone.marionette');

var Post = Marionette.LayoutView.extend({
	tagName: 'li',
	template: require('../templates/post.html')
});

var PostContainer = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: Post
});

module.exports = PostContainer;
