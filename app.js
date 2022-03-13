const hamburger = document.querySelector(".hamburger");
const mobileNavBar = document.querySelector(".mobile-navbar");

hamburger.addEventListener('click', function () {
    this.classList.toggle("is-active");
    mobileNavBar.classList.toggle("is-active");
})