'use strict'

//Отмена и всплытие события

//Cancel eventListener
const h1 = document.querySelector('h1');

function alertH1(){
  alert('hello');
  h1.removeEventListener('mouseenter',alertH1);
}
h1.addEventListener('mouseenter', alertH1);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomColor() {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
}

const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const link = document.querySelector(".nav__link");

navLinks.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target);
  console.log(e.currentTarget);
});