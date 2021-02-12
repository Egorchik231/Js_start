alert('Task 1')

let number = prompt('Enter number')

function threeDigitNumberToObject(anyNumber){
    if (anyNumber > 999 || anyNumber < 0) {
        console.log('Incorrect number')
        return {}
    }

    let threeDigitNumberInObject = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0}

    for (let i in threeDigitNumberInObject) {
        threeDigitNumberInObject[i] = anyNumber % 10
        anyNumber = Math.floor(anyNumber / 10)
    }
    return threeDigitNumberInObject
}

console.log(threeDigitNumberToObject(number))

alert('Task 2,3,4')

const basket = [
    {name: 'Bread', price: 30, number: 2},
    {name: 'Milk', price: 60, number: 1},
    {name: 'Chips', price: 100, number: 5}
]

function countBasketPrice(basket) {
    let basketPrice = 0
    for (let i in basket){
        basketPrice += basket[i].price * basket[i].number
    }
    return basketPrice
}

console.log(countBasketPrice(basket))

export default {basket, countBasketPrice}