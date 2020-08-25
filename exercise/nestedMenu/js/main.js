"use strict";

const box = document.querySelectorAll('.box'),
      nestedBoxes = document.querySelectorAll('header>div>ul>li>ul');

for(let i = 0; i < box.length; i++){
  box[i].addEventListener('mouseover', ()=>{
    for(let item of nestedBoxes){
      item.classList.remove('toggleMenu');
    }
    nestedBoxes[i].classList.add('toggleMenu');
  })
}
