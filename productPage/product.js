"use strict"

const itemHeader = document.querySelectorAll(".item-header")
// const sortList = document.querySelector(".sort-list")
const itemList = document.querySelectorAll(".item-list")


// itemHeader.addEventListener("click", () => {
//     sortList.classList.toggle("hidden");
// });


itemHeader.forEach((item, index) => {
    item.addEventListener("click", () => {
        itemList[index].classList.toggle("hidden");
    });
});

