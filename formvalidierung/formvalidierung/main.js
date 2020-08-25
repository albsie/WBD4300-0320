"use strict";
let d = document,
    form = d.getElementById('form'),
    errBox = d.getElementById('errorBox');

form.addEventListener('submit', (Event)=>{
  Event.preventDefault();
  let errors = "";
  errBox.innerHTML = "";
  // Name
  if(form.name.value.length < 2){
    errors += "<span>Der Name muss aus mindestens 2 Buchstaben bestehen</span>";
  }
  // Email
  if(validateEmail(form.email.value)){
    form.email.style.color = "green";
  }else{
    form.email.style.color = "red";
    errors += "<span>Diese Email Adresse ist falsch</span>";
  }
  // Passwort
  if(form.password.value.length <= 8){
    errors += "<span>Das Passwort muss aus mindestens 8 Zeichen bestehen</span>";
  }
// Passwortwiederholung
if(form.password.value != form.passwordRpt.value){
  errors += "<span>Die Passwortwiederholung stimmt nicht mit dem Passwort überein!</span>";
}
// Alter
if(isNaN(Number(form.age.value))){
errors += "<span>Dieses Feld darf nur aus Zahlen bestehen</span>";
}
if(form.age.value <=14 || form.age.value >= 100){
  errors += "<span>Dieses Alter ist nicht erlaubt!</span>";
}
if(!form.men.checked && !form.woman.checked){
  errors += "<span>Wähle dein Geschlecht</span>";
}
/*
if(form.gender.value === ''){
  errors += "<span>Zweites Ergebnis</span>";
}
*/
if(!form.conditions.checked){
  errors += "<span>Bestätige die AGB's!!!</span>";
}
if(errors === ''){
  window.location.href = "confirm.html";
}
  errBox.innerHTML = errors;
});


function validateEmail(email)
{
 return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

/*
function removeError(){
  let errors = d.querySelectorAll('#errorBox span');
  for(let spanElem of errors){
    spanElem.remove();
  }
}
*/
