"use strict";

const form = document.getElementById("form"),
  output = document.getElementById("output");
let todos = JSON.parse(localStorage.getItem('todos')) || [],
  priorityData = [{
      value: 1,
      name: 'Niedrig'
    },
    {
      value: 2,
      name: 'Mittel'
    },
    {
      value: 3,
      name: 'Hoch'
    }
  ];
renderTodos();
// Klick Event
form.saveBtn.addEventListener("click", Event => {
  Event.preventDefault();
  if (form.todo.value != "" && form.priority.value != 0) {
    saveTodos();
    deleteTodos();
    renderTodos();
  }

});

// Speichere Todo in todos Array
function saveTodos() {
  todos.push({
    todo: form.todo.value,
    priority: Number(form.priority.value)
  });
  form.todo.value = "";
  form.priority.value = 0;
  //console.log(todos);
}

// Rendere Todos in Output-Tag
function renderTodos() {
  for (let [index, item] of todos.entries()) {
    let ul = document.createElement('ul'),
      li_1 = document.createElement('li'),
      li_2 = document.createElement('li'),
      li_3 = document.createElement('li'),
      li_4 = document.createElement('li'),
      li_5 = document.createElement('li'),
      doneBtn = document.createElement('button'),
      deleteBtn = document.createElement('button');
    li_1.innerHTML = index + 1;
    li_2.innerHTML = item.todo;
    item.done ? li_2.className = 'setDone': '';
    li_3.innerHTML = priorityData.find(para => {
      return para.value === item.priority;
    }).name;
    doneBtn.innerHTML = "Erledigt";
    doneBtn.className = "btn btn-success";
    doneBtn.onclick = () => {
      done(index);
    };
    li_4.appendChild(doneBtn);
    deleteBtn.innerHTML = "Löschen";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.onclick = ()=>{
      deleteTodo(index);
    };
    li_5.appendChild(deleteBtn);
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);
    ul.appendChild(li_5);
    ul.className = "todoItem";
    output.appendChild(ul);
  }
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Lösche Todos in Output-Tag
function deleteTodos() {
  let todoItems = document.querySelectorAll('.todoItem');
  for (let item of todoItems) {
    item.remove();
  }
}
// Todo auf erledigt setzen
function done(i){
  todos[i].done = true;
  deleteTodos();
  renderTodos();
}
// Todo löschen
function deleteTodo(i){
  todos.splice(i,1);
  deleteTodos();
  renderTodos();
}


/*
[
{todo: "essen", priority: "mittel"},
{todo: "trinken", priority: "hoch"}
]
*/
