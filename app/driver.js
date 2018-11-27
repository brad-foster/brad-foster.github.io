
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var PostContentUtil = require('./util/postContentUtil');

var PostContainer = require('./views/postContainer');
var PostModel = require('./models/post');

var app = new Marionette.Application({
	onStart: function(options) {
		var initialData = PostContentUtil.getPostObjects();

		var postContainer = new PostContainer({
			collection: new Backbone.Collection(initialData),
			model: new PostModel()
		});
		postContainer.render();
		postContainer.triggerMethod('show');
	}
});

app.start();
