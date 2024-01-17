"use strict"

const navbarIcon = document.querySelector(".navbar-icon")
const catalogDropdown = document.querySelector(".catalog-dropdown")
const catalogTypeTop = document.querySelectorAll(".catalogTypeTop")

const catalogtypeDrop = document.querySelectorAll(".catalogtype-drop")
const chevronIcon = document.querySelectorAll(".chevronIcon")

const itemSort = document.querySelector(".item-sort")
const sortList = document.querySelector(".sort-list ul")

const itemHeader = document.querySelectorAll(".item-header")
const itemHeaderIcon = document.querySelector(".item-header img")
const itemList = document.querySelectorAll(".item-list")


navbarIcon.addEventListener("click", () => {
    catalogDropdown.classList.toggle("hidden");
})

catalogTypeTop.forEach((catalog, index) => {
    catalog.addEventListener("click", () => {
        catalogtypeDrop[index].classList.toggle("hidden");
        chevronIcon[index].classList.toggle("rotate");
    });
});


window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        catalogDropdown.classList.add("hidden");
    }
})

itemSort.addEventListener("click", () => {
    sortList.classList.toggle("hidden");
});

itemHeader.forEach((item, index) => {
    item.addEventListener("click", () => {
        itemList[index].classList.toggle("hidden")
        if (itemList[index].classList == "item-list hidden") {
            itemHeaderIcon.src = `../assets/icons/plus.svg`;

            console.log(1);
        } else if(itemList[index].classList == "item-list") {
            itemHeaderIcon.src = `../assets/icons/minus.svg`;
            console.log(2);
        }
    })
});