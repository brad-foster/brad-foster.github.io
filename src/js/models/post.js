
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
	defaults : {
		postTitle: '',
		postBody: '',
		postAuthor: '',
		postDate: new Date('DD-MM-YYYY')
	},

	validate: function(attrs) {
		var errors = {};
		var hasError = false;

		if(!attrs.postTitle) {
			errors.postTitle = 'Title field must not be empty.';
			hasError = true;
		}
		if(!attrs.postBody) {
			errors.postBody = 'Body field must not be empty.';
			hasError = true;
		}

		if(hasError) {
			return errors;
		}
	}
});

module.exports = Post;
