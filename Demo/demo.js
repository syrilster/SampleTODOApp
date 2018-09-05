var buttonElem = $('button');
var inputElem = $('input');
var ulElem = $('ul');

var todos = [];
buttonElem.click(addToDo);


function addToDo() {
  var userInput = inputElem.val();
  if (userInput.trim() == '') {
    return;
  }
  var newTodo = {
    id: Math.random(),
    value: userInput
  };

  todos.push(newTodo);
  $('<li>' + userInput + '</li>').appendTo(ulElem)
    .attr('dataset-id', newTodo.id)
    .click(removeTodo);
  console.log(todos);
}

function removeTodo(event) {
  var clickedLi = $(this);
  var itemId = clickedLi.attr('dataset-id');
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {
      todos.splice(i, 1);
      break;
    }
  }
  clickedLi.remove();
  console.log(todos);

}

console.log(todos);
