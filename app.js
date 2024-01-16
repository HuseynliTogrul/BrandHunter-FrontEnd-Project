"use strict"

const navbarIcon = document.querySelector(".navbar-icon")
const catalogDropdown = document.querySelector(".catalog-dropdown")
const catalogTypeTop = document.querySelectorAll(".catalogTypeTop")

const catalogtypeDrop = document.querySelectorAll(".catalogtype-drop")
const chevronIcon = document.querySelectorAll(".chevronIcon")

navbarIcon.addEventListener("click", () => {
    catalogDropdown.classList.toggle("hidden");
})

catalogTypeTop.forEach((catalog, index) => {
    catalog.addEventListener("click", () => {
        catalogtypeDrop[index].classList.toggle("hidden");
        chevronIcon[index].classList.toggle("rotate");
    });
});
