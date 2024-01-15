"use strict"

const catalogList = document.querySelector(".catalog-list")

catalogList.addEventListener("click", (e) =>{
    e.classList.toggle("hidden");
})