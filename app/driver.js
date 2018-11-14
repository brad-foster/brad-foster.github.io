
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ToDoModel = require('./models/todo');

var ToDo = Marionette.LayoutView.extend({
	tagName: 'li',
	template: require('./templates/todoitem.html')
});

var TodoList = Marionette.CompositeView.extend({
	el: '#app-hook',
	template: require('./templates/todolist.html'),

	childView: ToDo,
	childViewContainer: 'ul',

	ui: {
		assignee: '#id_assignee',
		form: 'form',
		text: '#id_text',
		validationErrors: '#todoValidationErrors'
	},

	triggers: {
		'submit @ui.form': 'add:todo:item'
	},

	collectionEvents: {
		add: 'itemAdded'
	},

	onAddTodoItem: function() {
		var self = this;

		this.model.set({
			assignee: this.ui.assignee.val(),
			text: this.ui.text.val()
		})

		this.ui.validationErrors.empty();

		if(this.model.isValid()) {
			var items = this.model.pick('assignee', 'text');
			this.collection.add(items);
		} else {
			var obj = this.model.validationError;
			for(key in obj) {
				self.ui.validationErrors.append('<p>' + obj[key].substr(0,1).toUpperCase() + obj[key].substr(1)  + '.</p>');
			}
		}
	},

	itemAdded: function() {
		this.model.set({
			assignee: '',
			text: ''
		});

		this.ui.assignee.val('');
		this.ui.text.val('');
	}
});

var todo = new TodoList({
	collection: new Backbone.Collection([
		{assignee: 'Scott', text: 'Write a book about Marionette'},
		{assignee: 'Andrew', text: 'Do some coding'}
	]),

	model: new ToDoModel
});

todo.render();
