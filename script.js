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

// Modal window /|\

//Scroll by btn and nav-menu
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", () => {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Tab work

const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// transparent nav menu

function hover(element) {
  if (element.target.classList.contains("nav__link")) {
    const link = element.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector(".nav__logo");

    siblings.forEach((sib) => {
      if (sib != link) {
        sib.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}
const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", hover.bind(0.5));
nav.addEventListener("mouseout", hover.bind(1));

// showing nav menu after certain coordinates

// old

// window.addEventListener("scroll", () => {
//   if (window.scrollY > coord.top) {
//     document.querySelector(".nav").classList.add("sticky");
//   } else {
//     document.querySelector(".nav").classList.remove("sticky");
//   }
// });

const header = document.querySelector(".header");

function observHead(enteries) {
  if (
    enteries[0].intersectionRatio >= 0.9 ||
    enteries[0].intersectionRatio == 0
  ) {
    if (enteries[0].intersectionRatio == 0)
      nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    nav.classList.remove("sticky");
  } else {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0)";
    nav.classList.add("sticky");
  }
}
const optHead = {
  threshold: [0.9, 0],
  // rootMargin: '+/-20px', // optional properties
};
const observerHeader = new IntersectionObserver(observHead, optHead);
observerHeader.observe(header);

// Всплытие секций

const sections = document.querySelectorAll(".section");
const sectionsObserv = new IntersectionObserver(revealSect, {
  threshold: 0.15,
});

function revealSect(enteries, observer) {
  if (enteries[0].isIntersecting) {
    enteries[0].target.classList.remove("section--hidden");
    observer.unobserve(enteries[0].target);
  }
}

sections.forEach((sect) => {
  sectionsObserv.observe(sect);
  sect.classList.add("section--hidden");
});

const allImg = document.querySelectorAll("img[data-src]");

function loadImg(enteries, observer) {
  if(!enteries[0].isIntersecting) return;
  enteries[0].target.src = enteries[0].target.dataset.src;
  enteries[0].target.addEventListener("load", () => {
    enteries[0].target.classList.remove("lazy-img");
    observer.unobserve(enteries[0].target);
  });
}

const imgObserve = new IntersectionObserver(loadImg, { threshold: 0.15 });

allImg.forEach((img) => {
  imgObserve.observe(img);
});
