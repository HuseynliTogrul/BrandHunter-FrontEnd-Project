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

const itemEl = document.querySelectorAll('.item');

const itemListSpan = document.querySelectorAll(".itemListSpan")
const itemListLi = document.querySelectorAll(".item-list ul li")



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

// itemHeader.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         itemList[index].classList.toggle("hidden")
//     })
// });

itemEl.forEach(item => {
    const header = item.querySelector('.item-header');
    const listEl = item.querySelector('.item-list');
    const toggle = item.querySelector('.accordion-toggle');

    header.addEventListener('click', () => {
        if (listEl.style.display !== 'none') {
            header.style.background = "#e5e7eb";
        } else {
            header.style.background = "#ffdcdc";
        }
        listEl.style.display = listEl.style.display === 'none' ? 'block' : 'none';
        toggle.textContent = listEl.style.display === 'none' ? '+' : '-';
    });
});

itemListLi.forEach((item,index) => {
    item.addEventListener("click", () => {
        itemListSpan[index].classList.toggle("hidden")
    })    
});