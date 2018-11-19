
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var PostModel = require('./models/post');

var Post = Marionette.LayoutView.extend({
	tagName: 'li',
	template: require('./templates/post.html')
});

var PostContainer = Marionette.CompositeView.extend({
	el: '#app-hook',
	template: require('./templates/postContainer.html'),

	childView: Post,
	childViewContainer: 'ul',

	ui: {
		form: 'form',
		postTitle: '#postTitle',
		postBody: '#postBody',
		validationErrors: '#postValidationErrors'
	},

	triggers: {
		'submit @ui.form': 'add:post'
	},

	collectionEvents: {
		add: 'postAdded'
	},

	onAddPost: function() {
		var self = this;

		this.model.set({
			postTitle: this.ui.postTitle.val(),
			postBody: this.ui.postBody.val()
		})

		this.ui.validationErrors.empty();

		if(this.model.isValid()) {
			var items = this.model.pick('postTitle', 'postBody');
			this.collection.add(items);
		} else {
			var obj = this.model.validationError;
			for(key in obj) {
				self.ui.validationErrors.append('<p>' + obj[key].substr(0,1).toUpperCase() + obj[key].substr(1)  + '.</p>');
			}
		}
	},

	postAdded: function() {
		this.model.set({
			postTitle: '',
			postBody: ''
		});

		this.ui.postTitle.val('');
		this.ui.postBody.val('');
	}
});

var postContainer = new PostContainer({
	collection: new Backbone.Collection([
		{postTitle: 'Brad Foster', postBody: 'Creating this site pt. 1'},
		{postTitle: 'Bradley Foster', postBody: 'Creating this site pt. 2'}
	]),

	model: new PostModel
});

postContainer.render();
