"use strict"

let basketBtn = document.querySelector('.open'),
    btn = document.querySelectorAll('button'),
    card = document.querySelectorAll("img"),
    productCard = document.querySelectorAll(".product-card"),
    buyProduct = document.querySelector('.buy-product'),
    closeBtn = document.querySelector('.close'),
    cards = document.querySelector('.cards');


const showBasket = () => {
    buyProduct.classList.toggle('d-flex');
}

btn.forEach((item, index) => {

    let arr = []

    item.addEventListener('click', () => {
        arr.push(card[index])
        innerCardElement(arr)
        item.parentElement.remove()
    })
})

const innerCardElement = (arr) => {
    arr.forEach(item => {
        let elem = `
            <div class="product">
                <div class="product-card">
                <img src=${item.src} alt="bread">
                </div>
            </div>
        `

        cards.innerHTML += elem
    })
}   

basketBtn.addEventListener('click', () => {
    showBasket()
})

closeBtn.addEventListener('click', () => {
    showBasket()
})