alert('Task 1')

let numb = 0
simpleNumbers = []


while (numb < 101) {

    if (numb === 1){
        alert(numb)
        simpleNumbers.push(numb)
    }
    for (let i in simpleNumbers) {
        if (numb === 1){
            break
        }
        if (simpleNumbers[i] !== 1 && numb % simpleNumbers[i] === 0 ) {
            break
        }

        if ( Number.parseInt(i) === simpleNumbers.length - 1 ) {
            simpleNumbers.push(numb)
            alert(numb)
        }
    }
    numb++
}

alert('Task 2 and 3')

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


alert('Task 4')
for (let i = 0; i < 10; alert(i), i++) {}

alert('Task 5')

for (let i = 1; i < 22; i++) {
    let outStr = ''
    for (let j = 1; j <= i; j++){
        outStr += '*'
    }
    console.log(outStr)

}
