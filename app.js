const hamburger = document.querySelector(".hamburger");
const mobileNavBar = document.querySelector(".mobile-navbar");

hamburger.addEventListener('click', function () {
    this.classList.toggle("is-active");
    mobileNavBar.classList.toggle("is-active");
})

// const navBarDropList = document.querySelector(".list-drop");
// const plusList = document.querySelector(".plus-list");

// plusList.addEventListener('click', function () {
//     navBarDropList.classList.toggle("active");
// })

window.addEventListener('mousedown', function (event) {
    const navBarDropList = document.querySelector(".list-drop");
    const plusList = document.querySelector('.plus-list');

    if (event.target === plusList) {
        navBarDropList.classList.toggle("active")

    } else if (event.target != navBarDropList && event.target.parentNode != navBarDropList) {
        navBarDropList.classList.remove("active")
    }
});

// Update footer date
const footerDate = document.querySelector("#footer-date")
const currentYear = new Date().getFullYear()
footerDate.textContent = currentYear
