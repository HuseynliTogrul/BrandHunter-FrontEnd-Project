"use strict"

const itemSort = document.querySelector(".item-sort")
const sortList = document.querySelector(".sort-list ul")

const itemHeader = document.querySelectorAll(".item-header")
const itemHeaderIcon = document.querySelector(".item-header img")
const itemList = document.querySelectorAll(".item-list")

const itemEl = document.querySelectorAll('.item');

const itemListSpan = document.querySelectorAll(".itemListSpan")
const itemListLi = document.querySelectorAll(".item-list ul li")

const itemHeaderBtn = document.querySelectorAll(".item-header")
const itemListEl = document.querySelectorAll(".item-list")


itemSort.addEventListener("click", () => {
    sortList.classList.toggle("hidden");
});

itemListLi.forEach((item,index) => {
    item.addEventListener("click", () => {
        itemListSpan[index].classList.toggle("hidden")
    })    
});


itemHeaderBtn.forEach((item, index) => {
    let statusList = false;
    item.addEventListener('click', () => {
        
        if (statusList) {
            itemListEl[index].style.display = "none"
            statusList = false;
            item.style.background = "#e5e7eb";
        } else {
            itemListEl[index].style.display = "block"
            statusList = true;
            item.style.background = "#ffdcdc";
        }
    })
})