"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".nav");
  const heroSection = document.querySelector(".home");

  const observerOptions = {
    root: null,
    rootMarging: "0px",
    threshold: 0.9,
  };
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navBar.classList.add("scrolled");
      } else {
        navBar.classList.remove("scrolled");
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(heroSection);
});
const portBtn = document.querySelectorAll(".port-btn");
const portGrid = document.querySelectorAll(".portfolio-grid");

portBtn.forEach((each, index) => {
  each.addEventListener("click", function () {
    portGrid.forEach((eachTab) => {
      eachTab.classList.remove("active");
    });
    portBtn.forEach((each) => {
      each.classList.remove("active");
    });
    document.querySelector(`.port-${index + 1}`).classList.add("active");
    document.querySelector(`.port-btn-${index + 1}`).classList.add("active");
    g;
  });
});

const navList = document.querySelector(".nav-list-box");
const toggleOpen = document.querySelector(".open");
const toggleclose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const body = document.body;

function openNav() {
  navList.classList.add("sticky");
  overlay.classList.add("sticky");
  body.classList.toggle("no-scroll");
}
toggleOpen.addEventListener("click", openNav);
function closeNav() {
  navList.classList.remove("sticky");
  overlay.classList.remove("sticky");
  body.classList.remove("sticky");
}
toggleclose.addEventListener("click", closeNav);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((each) => {
  each.addEventListener("click", function () {
    navList.classList.remove("sticky");
    overlay.classList.remove("sticky");
    body.classList.remove("sticky");
  });
});
