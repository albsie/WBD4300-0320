"use strict";

const d = document,
      menuBurger = d.getElementById('menuBurger'),
      menuNav = d.querySelector('header nav'),
      burgerDivs = d.querySelectorAll('#menuBurger div'),
      menuItems = d.querySelectorAll('header nav ul li');

      menuBurger.addEventListener('click', ()=>{
        menuNav.classList.toggle('fadedOutMenu');
        menuBurger.classList.toggle('rotate');
        for(let item of burgerDivs){
          item.classList.toggle('changeBackground');
        }
      });

      for(let item of menuItems){
        item.addEventListener('click', ()=>{
          setTimeout(()=>{
            menuNav.className = 'fadedOutMenu';
            menuBurger.classList.toggle("rotate");
            for(let item of burgerDivs){
              item.classList.toggle('changeBackground');
            }
          },300);
        })
      }
