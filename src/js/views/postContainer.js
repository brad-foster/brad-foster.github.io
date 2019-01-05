
var Marionette = require('backbone.marionette');

var PostForm = require('./postForm');
var PostList = require('./postList');

var PostContainer = Marionette.View.extend({
	el: '#app-hook',

	template: require('../../html/templates/postContainer.html'),

	ui: {
		validationErrors: '#postValidationErrors'
	},

	regions: {
		form: '.post-form',
		list: '.post-list'
	},

	childViewEvents: {
		'add:post' : 'addPost'
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

	addPost: function(child) {
		var self = this;

		this.ui.validationErrors.empty();

		this.model.set({
			postTitle: child.ui.postTitle.val(),
			postBody: child.ui.postBody.val(),
			postAuthor: 'Brad Foster',
			postDate: new Date()
		}, {validate: true});

		if(this.model.validationError) {
			for(err in this.model.validationError) {
				self.ui.validationErrors.append('<p style="color: red; font-size: 12px; margin: 5px 0px 5px 10px">' + self.model.validationError[err] + '</p>');
			}
		} else {
			var postData = this.model.pick('postTitle', 'postBody', 'postAuthor', 'postDate');
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
