"use strict"

const itemSort = document.querySelector(".item-sort")
const sortList = document.querySelector(".sort-list ul")

// const itemHeader = document.querySelectorAll(".item-header")
// const itemHeaderIcon = document.querySelector(".accordion-toggle")
// const itemList = document.querySelectorAll(".item-list")

const itemEl = document.querySelectorAll('.item');

const itemListSpan = document.querySelectorAll(".itemListSpan")
const itemListLi = document.querySelectorAll(".item-list ul li")

const brendLi = document.querySelectorAll(".brend ul li")
const sizeLi = document.querySelectorAll(".size ul li")
const colorLi = document.querySelectorAll(".color ul li")

const brendCheck = document.querySelectorAll(".brendCheck")
const sizeCheck = document.querySelectorAll(".sizeCheck")
const colorCheck = document.querySelectorAll(".colorCheck")

const itemHeaderBtn = document.querySelectorAll(".item-header")
const accordionToggle = document.querySelectorAll(".accordion-toggle")
const itemListEl = document.querySelectorAll(".item-list")

const products = document.querySelector(".products")


itemSort.addEventListener("click", () => {
    sortList.classList.toggle("hidden");
});

itemListLi.forEach((item, index) => {
    item.addEventListener("click", () => {
        itemListSpan[index].classList.toggle("hidden")
    })
});

// brendCheck.innerHTML = "";

brendLi.forEach((brend, index) => {
    brend.addEventListener("click", () => {
        brendCheck[index].innerHTML = `<i class="fa-solid fa-check"></i>`
    })
})

sizeLi.forEach((size, index) => {
    size.addEventListener("click", () => {
        sizeCheck[index].innerHTML = `<i class="fa-solid fa-check"></i>`
    })
})

colorLi.forEach((color, index) => {
    color.addEventListener("click", () => {
        colorCheck[index].innerHTML = `<i class="fa-solid fa-check"></i>`
    })
})

itemHeaderBtn.forEach((item, index) => {
    let statusList = false;
    item.addEventListener('click', () => {

        if (statusList) {
            itemListEl[index].style.display = "none"
            statusList = false;
            item.style.background = "#e5e7eb";
            accordionToggle[index].innerHTML = `+`
        } else {
            itemListEl[index].style.display = "block"
            statusList = true;
            item.style.background = "#ffdcdc";
            accordionToggle[index].innerHTML = `-`
        }
    })
})

////////////////////////////////////////



// const filteredCategories = [];
// const filteredColors = [];
// const filteredSizes = [];

// itemListLi.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("font-black");

//         const { category } = item.dataset;

//         if (filteredCategories.includes(category)) {
//             const indexOfCategory = filteredCategories.indexOf(category);
//             filteredCategories.splice(indexOfCategory, 1);
//         } else {
//             filteredCategories.push(category);
//         }
//         displayProducts();
//     });
// });


// const displayProducts = () => {
//     const filteredProducts = products.filter((product) => {
//         if (
//             filteredCategories.length === 0 &&
//             filteredColors.length === 0 &&
//             filteredSizes.length === 0
//         ) {
//             return true;
//         }

//         const categoryCondition =
//             filteredCategories.length === 0 ||
//             filteredCategories.includes(product.category);

//         const colorCondition =
//             filteredColors.length === 0 || filteredColors.includes(product.color);

//         const sizeCondition =
//             filteredSizes.length === 0 ||
//             filteredSizes.every((size) => product.sizes.includes(size));

//         return categoryCondition && colorCondition && sizeCondition;
//     });

//     products.innerHTML = "";

//     filteredProducts.forEach((product) => {
//         // const pName = product.name
//         //     .split(" ")
//         //     .map((name) => name[0].toUpperCase() + name.slice(1))
//         //     .join(" ");

//         products.innerHTML += ` <div class="product-item">
//                         <a href="../orderPage/order.html">
//                             <img src="${product.image}" alt="">
//                             <p>${product.brand}</p>
//                             <span>${product.price}</span>
//                         </a>
//                     </div>`;

//         const productItems = document.querySelectorAll(".productItem");
//         productItems.forEach((productItem, index) => {
//             productItem.addEventListener("click", () => {
//                 const selectedProduct = filteredProducts[index];
//                 localStorage.setItem("product", JSON.stringify(selectedProduct));
//             });
//         });
//     });
//     productsCount.textContent = filteredProducts.length;
// };

// displayProducts();