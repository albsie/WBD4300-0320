"use strict";
let d = document,
    form = d.getElementById('form'),
    errBox = d.getElementById('errorBox');

form.addEventListener('submit', (Event)=>{
  Event.preventDefault();
  let errors = "";
  errBox.innerHTML = "";
  if(form.name.value.length < 2){
    errors += "<span>Der Name muss aus mindestens 2 Buchstaben bestehen</span>";
  }

  errBox.innerHTML = errors;
});


/*
function removeError(){
  let errors = d.querySelectorAll('#errorBox span');
  for(let spanElem of errors){
    spanElem.remove();
  }
}
*/
