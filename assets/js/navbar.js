const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const dimScreen = document.querySelector('.dim-screen');
const navbarContent = document.getElementById("mobile-navbar");

if (menuIcon && closeIcon && dimScreen && navbarContent) {
  menuIcon.addEventListener("click", () => {
    navbarContent.classList.add("active");
    menuIcon.style.display = "none";
    dimScreen.style.display = 'block';
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    navbarContent.classList.remove("active");
    menuIcon.style.display = "block";
    dimScreen.style.display = 'none';
    closeIcon.style.display = "none";
  });

  dimScreen.addEventListener("click", () => {
    navbarContent.classList.remove("active");
    menuIcon.style.display = "block";
    dimScreen.style.display = 'none';
    closeIcon.style.display = "none";
  });

  navbarContent.addEventListener("click", () => {
    navbarContent.classList.remove("active");
    menuIcon.style.display = "block";
    dimScreen.style.display = 'none';
    closeIcon.style.display = "none";
  });
}

// ... remaining code ...

'use strict';
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const searchBar = document.querySelector("[data-second-navbar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-closebutton]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);
