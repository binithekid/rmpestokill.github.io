const navbar = document.querySelector("header");

window.onscroll = function () {
if (window.scrollY > 2) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
};


