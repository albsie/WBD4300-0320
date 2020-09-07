"use strict";
var app = new Vue({
  el: '#app',
  data: {
    priorityData:[
      {
        id:1,
        name: 'niedrig'
      },
      {
        id:2,
        name: 'mittel'
      },
      {
        id:3,
        name: 'hoch'
      }
    ],
    todo: '',
    priority:null,
    todos: []
  },
  methods:{
    saveTodo(){
      if(this.todo && this.priority){
        this.todos.push({
          todo: this.todo,
          priority: this.priority
        });

      }
      console.log(this.todos);
    }
  }
})
