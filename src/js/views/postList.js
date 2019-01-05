
var Marionette = require('backbone.marionette');

var Post = Marionette.View.extend({
	tagName: 'div',

	template: require('../../html/templates/post.html'),

	triggers: {
    'click #deletePost': 'delete:post'
  }
});

var PostList = Marionette.CollectionView.extend({
  tagName: 'div',

  childView: Post,

	childViewEvents: {
		'delete:post' : 'deletePost'
	},

	deletePost : function(child) {
		this.collection.remove(child.model);
	}
});

module.exports = PostList;
