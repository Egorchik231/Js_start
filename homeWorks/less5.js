function createChessBoard(){
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const colors = {
        true: 'white',
        false: 'black'
    }
    let color;
    const chessboard = document.querySelector('.chessboard')
    let currentLine
    for (let i = 1; i <= 8; i++) {
        color = (i % 2 === 0)
        if (i === 1) {
            chessboard.innerHTML = `<div class="line${i} line"></div>`
        } else {
            chessboard.innerHTML = chessboard.innerHTML + `<div class="line${i} line"></div>`
        }

        for (let j = 1; j <= 8; j++) {
            let block = `<div class="block ${colors[color]}">${(j === 1) ? `<p class="text">${letters[i - 1]}</p>` : ''}
                                                             ${(i === 1) ? `<p class="text">${j}</p>` : ''}</div>`
            currentLine = document.querySelector(`.line${i}`)
            currentLine.innerHTML = currentLine.innerHTML + block
            color = !color
        }
    }


    return console.log('Success')
}




createChessBoard()

const basket = [
    // {name: 'Bread', price: 30, number: 2},
    // {name: 'Milk', price: 60, number: 1},
    // {name: 'Chips', price: 100, number: 5}
]

function countBasketPrice(basket) {
    let basketPrice = 0
    for (let i in basket){
        basketPrice += basket[i].price * basket[i].number
    }
    return basketPrice
}


const basket_block = document.querySelector('.basket')
function render_basket(basket){
    let totalNumber
    let totalCost
    if (!basket.length){
        return `The Basket is empty...`
    }
    for (let i in basket){
        totalNumber = basket[i].number
        totalCost = countBasketPrice(basket)
    }

    return `Number of products: ${totalNumber}\nTotal price: ${totalCost}`

}

basket_block.innerHTML = `<p>${render_basket(basket)}</p>`

const Products = [
    {name: 'Bitcon', price: 47000, description: 'Some description here', img: 'https://img5.goodfon.ru/original/640x960/5/ca/bitcoin-btc-bitkoin-logo-fon-belyi-fon-logo.jpg'},
    {name: 'Ethereum', price: 1800, description: 'Some description here', img: 'https://yt3.ggpht.com/a/AATXAJwqEzQkXIU73DKDJIxT4s_AwEobecbrilUGzqC3_g=s900-c-k-c0xffffffff-no-rj-mo'},
    {name: 'BNB', price: 130, description: 'Some description here', img: 'https://avatars.mds.yandex.net/get-zen_doc/1671806/pub_5e95e343539dae4595bdad7e_5e95e458539dae4595bdadb1/scale_1200'},
    {name: 'SFP', price: 4, description: 'Some description here', img: 'https://pc-miner.com/wp-content/uploads/2021/01/unnamed.jpg'},
    ]

function renderCatalog(Products){
    let outPutString = ``

    Products.forEach((product) => {
        outPutString += `<div class="product-item">
                            <img src="${product.img}">
                            <div class="product-list">
                                <h3>${product.name}</h3>
                                  <span class="price">$${product.price}</span>
                                  <a href="" class="button">В корзину</a>
                            </div>
                         </div>`
    })
    return `${outPutString}`
}

document.querySelector('#catalog').innerHTML = renderCatalog(Products)