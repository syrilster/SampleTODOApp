new Vue({
  el: '#todoApp',
  data: {
    todos: [],
    userInput: ''
  },
  methods: {
    addTodo: function() {
      if (this.userInput.trim() == '') {
        return;
      }
      var newTodo = {
        id: _.uniqueId(),
        value: this.userInput
      };
      this.todos.push(newTodo);
      console.log(this.todos);
    },
    removeTodo(todo) {
      var itemId = todo.id;
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id == itemId) {
          this.todos.splice(i, 1);
          break;
        }
      }
			// No other code to remove the element as vue.js is going to detect the deletion and
			// remove the dom elements automatically.
    }
  }

});