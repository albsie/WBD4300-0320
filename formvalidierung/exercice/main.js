"use strict";
let d = document,
    form = d.getElementById('form'),
    output =d.getElementById('output');

    form.saveBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      output.innerHTML = form.name.value;
    });
