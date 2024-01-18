"use strict"

const plusBtn = document.querySelector(".plusBtn")
const minusBtn = document.querySelector(".minusBtn")
const countValue = document.querySelector(".countValue")


plusBtn.addEventListener("click",()=>{
    if(+countValue.value > 1){
        +countValue.value--
    }
    countValue.innerText = countValue;
})

minusBtn.addEventListener("click",()=>{
    console.log(countValue.value);
    if(+countValue.value < 10){
        +countValue.value++
        
    }
    countValue.innerText = countValue;

})