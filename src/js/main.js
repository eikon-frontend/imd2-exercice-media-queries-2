var burger = document.querySelector(".burger");
var dropdown = document.querySelector(".burger-dropdown");
var links = document.querySelectorAll(".burger-dropdown a");

var toggleMenu = function () {
  burger.classList.toggle("is-open");
  dropdown.classList.toggle("is-open");
};

burger.addEventListener("click", toggleMenu);
links.forEach(function (link) {
  link.addEventListener("click", toggleMenu);
});
