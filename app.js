"use strict"

const navbarIcon = document.querySelector(".navbar-icon")
const catalogDropdown = document.querySelector(".catalog-dropdown")
const catalogTypeTop = document.querySelectorAll(".catalogTypeTop")

const catalogtypeDrop = document.querySelectorAll(".catalogtype-drop")
const chevronIcon = document.querySelectorAll(".chevronIcon")

const catalogItemsList = document.querySelectorAll(".catalog-dropdown ul")


navbarIcon.addEventListener("click", () => {
    catalogDropdown.classList.toggle("hidden");
})

catalogTypeTop.forEach((catalog, index) => {
    catalog.addEventListener("click", () => {
        for (let i = 0; i < catalogItemsList.length; i++) {
            catalogItemsList[i].classList.add("hidden")
        }

        catalogtypeDrop[index].classList.toggle("hidden");
        // chevronIcon[index].style.toggle("rotate");
    });
});


window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        catalogDropdown.classList.add("hidden");
    }
})