const hamburger = document.querySelector(".hamburger");
const mobileNavBar = document.querySelector(".mobile-navbar");

hamburger.addEventListener('click', function () {
    this.classList.toggle("is-active");
    mobileNavBar.classList.toggle("is-active");
})

const navBarDropList = document.querySelector(".list-drop");
const plusList = document.querySelector(".plus-list");

plusList.addEventListener('click', function () {
    navBarDropList.classList.toggle("active");
})
