
var Marionette = require('backbone.marionette');

var PostForm = require('./postForm');
var PostList = require('./postList');

var PostContainer = Marionette.LayoutView.extend({
	el: '#app-hook',

	template: require('../templates/postContainer.html'),

	ui: {
		validationErrors: '#postValidationErrors'
	},

	regions: {
		form: '.post-form',
		list: '.post-list'
	},

	collectionEvents: {
		add: 'postAdded'
	},

	onShow: function() {
		var postForm = new PostForm({model: this.model});
		var postList = new PostList({collection: this.collection});

		this.showChildView('form', postForm);
		this.showChildView('list', postList);
	},

	onChildviewAddPost: function(child) {
		var self = this;

		this.ui.validationErrors.empty();

		this.model.set({
			postTitle: child.ui.postTitle.val(),
			postBody: child.ui.postBody.val()
		}, {validate: true});

		if(this.model.validationError) {
			for(err in this.model.validationError) {
				self.ui.validationErrors.append('<p style="color: red; font-size: 12px; margin: 5px 0px 5px 10px">' + this.model.validationError[err] + '</p>');
			}
		} else {
			var postData = this.model.pick('postTitle', 'postBody');
			this.collection.add(postData);
		}
	},

	postAdded: function() {
		this.model.set({
			postTitle: '',
			postBody: ''
		});
	}
})

module.exports = PostContainer;
