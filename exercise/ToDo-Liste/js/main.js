"use strict";

const form = document.getElementById("form"),
    output = document.getElementById("output");
let todos = [];

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
    console.log(todos);
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
        li_3.innerHTML = item.priority;
        doneBtn.innerHTML = "Erledigt";
        doneBtn.className = "btn btn-success";
        li_4.appendChild(doneBtn);
        ul.appendChild(li_4);
        ul.appendChild(li_1);
        ul.className = "todoItem";
        output.appendChild(ul);
    }
}

// Lösche Todos in Output-Tag
function deleteTodos() {
    let todoItems = document.querySelectorAll('.todoItem');
    for (let item of todoItems) {
        item.remove();
    }
}


/*
[
{todo: "essen", priority: "mittel"},
{todo: "trinken", priority: "hoch"}
]
*/
