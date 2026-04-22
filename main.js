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
const open = document.querySelector(".open");
const body = document.body;
console.log(open);

function openNav() {
  navList.classList.add("sticky");
  overlay.classList.add("sticky");
  body.classList.add("no-scroll");
  open.classList.add("sticky");
}
toggleOpen.addEventListener("click", openNav);
function closeNav() {
  navList.classList.remove("sticky");
  overlay.classList.remove("sticky");
  body.classList.remove("sticky");
  body.classList.remove("no-scroll");
  open.classList.remove("sticky");
}
toggleclose.addEventListener("click", closeNav);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((each) => {
  each.addEventListener("click", function () {
    navList.classList.remove("sticky");
    overlay.classList.remove("sticky");
    body.classList.remove("sticky");
    body.classList.remove("no-scroll");
    open.classList.remove("sticky");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("show"));

        const id = entry.target.getAttribute("id");
        document.querySelector(`a[href="#${id}"]`).classList.add("show");
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
});
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});
window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";

    document.getElementById("content").style.display = "block";

    document.body.style.overflow = "auto";
  }, 1000);
};
