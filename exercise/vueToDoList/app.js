"use strict";
var app = new Vue({
  el: '#app',
  data: {
    priorityData: [{
        id: 1,
        name: 'niedrig'
      },
      {
        id: 2,
        name: 'mittel'
      },
      {
        id: 3,
        name: 'hoch'
      }
    ],
    renderKey: 1,
    todo: '',
    priority: 0,
    todos: JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    saveTodo() {
      if (this.todo && this.priority) {
        this.todos.push({
          todo: this.todo,
          priority: this.priority
        });
        this.todo = '';
        this.priority = 0;
        this.setPriorityName();
        this.saveToLocalStorage(this.todos);
      }
      console.log(this.todos);
    },
    saveToLocalStorage(todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    },
    setPriorityName() {
      this.todos.map(res => {
        res.priorityName = this.priorityData.find(data => data.id === res.priority).name;
      });
    },
    setDone(index){
      if(this.todos[index].done){
        this.todos[index].done = false;
      }else{
        this.todos[index].done = true;
      }
    this.saveToLocalStorage(this.todos);
    this.renderKey++;
    },
    deleteTodo(index){
      this.todos.splice(index,1);
      this.saveToLocalStorage(this.todos);
      this.renderKey++;
    },
    sortTodos(){
      this.todos.sort((a,b)=>{
        if(a.todo < b.todo){
          return -1
        } else if (a.todo > b.todo) {
          return 1
        } else{
          return 0;
        }
      });
      this.saveToLocalStorage(this.todos);
      this.renderKey++;
    }
  },
  mounted() {
    console.log(this.todos);
  },
  beforeMount() {
    this.setPriorityName();
  }
})
