"use strict";

const form = document.getElementById('form'),
      output = document.getElementById('output');

form.addEventListener('submit', (Event)=>{
  Event.preventDefault(); // Unterbricht den POST-Request
  output.innerHTML = form.name.value;
});
