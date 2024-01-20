"use strict"

const mainCupon = document.querySelector(".main-cupon p")
const mainCuponHidden = document.querySelector(".cupon-hidden")

const inputCheckbox = document.querySelectorAll(".input-checkbox")
const inputCheck = document.querySelector("#inputCheck")
const address = document.querySelector(".address")


mainCupon.addEventListener("click", () => {
    mainCuponHidden.classList.toggle("hidden")
})


inputCheckbox.forEach((input) => {
    input.addEventListener("click", () => {
        // address.classList.toggle("hidden")

        if (address.classList == "address hidden") {
            address.innerHTML = `<span class="address">(Seçimlik)</span>`
        } else if (address.classList == "address") {
            address.innerHTML = `<span>*</span>`
        }
    })
});