"use strict";

// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////

// Coordinates

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", () => {
  section1.scrollIntoView({
    behavior: "smooth",
  });

  // window.scrollTo({ // устарел
  //   left: section1.getBoundingClientRect().left + window.scrollX,
  //   top: section1.getBoundingClientRect().top + window.scrollY,
  //   behavior: 'smooth',
  // });
});

////////////////////////////////////////

// Отмена и всплытие события

// Cancel eventListener
// const h1 = document.querySelector('h1');

// function alertH1(){
//   alert('hello');
//   h1.removeEventListener('mouseenter',alertH1);
// }
// h1.addEventListener('mouseenter', alertH1);

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
