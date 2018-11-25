
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var PostContainer = require('./views/postContainer');
var PostModel = require('./models/post');

var initialData = [
	{postTitle: 'Brad Foster', postBody: 'Creating this site pt. 1'},
	{postTitle: 'Bradley Foster', postBody: 'Creating this site pt. 2'}
];

var app = new Marionette.Application({
	onStart: function(options) {
		var postContainer = new PostContainer({
			collection: new Backbone.Collection(options.intitialData),
			model: new PostModel()
		});
		postContainer.render();
		postContainer.triggerMethod('show');
	}
});

app.start({initialData: initialData});
