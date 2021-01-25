alert('Task 1')

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 <-- Сначала нарастили {a}, потом присвоили {c} значение увеличенного на 1 {a} (2) -->
d = b++; alert(d);           // 1 <-- Сначала присвоили переменной {d} значение изначального {b}, потом наростили {b} (2) -->
c = (2+ ++a); alert(c);      // 5 <-- Сначала нарастили {a}, который уже был увелчен до (2) первым шагом,
                             // потом присвоили {c} сумму 2 и увеличенного на 1 {a} (3) -->
d = (2+ b++); alert(d);      // 4 <-- Аналогично предыдущему -->
alert(a);                    // 3 <-- {a} дважды наращивалось, как и  {b}-->
alert(b);

alert('Task 2')

// var a = 2;
// var x = 1 + (a *= 2);
// Чему равен х?
// 1 + (a = a * 2), а = 2 * 2 = 4, 4 + 1 = 5
// Ответ: х = 5
alert('Ответ: х = 5')


alert('Task 3')

// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a, b
a = Math.round(Math.random()*100) - 50
b = Math.round(Math.random()*100) - 50

if (a >= 0 && b >= 0){
    alert(a - b)
} else if (a < 0 && b < 0) {
    alert(a * b)
} else {
    alert(a + b)
}


alert('Task 4')

// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

a = Math.round(Math.random()*15)

switch (a) {
    case 0: alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
    break
    case 1: alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
    break
    case 2: alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15')
    break
    case 3: alert('3 4 5 6 7 8 9 10 11 12 13 14 15')
    break
    case 4: alert('4 5 6 7 8 9 10 11 12 13 14 15')
    break
    case 5: alert('5 6 7 8 9 10 11 12 13 14 15')
    break
    case 6: alert('6 7 8 9 10 11 12 13 14 15')
    break
    case 7: alert('7 8 9 10 11 12 13 14 15')
    break
    case 8: alert('8 9 10 11 12 13 14 15')
    break
    case 9: alert('9 10 11 12 13 14 15')
    break
    case 10: alert('11 12 13 14 15')
    break
    case 11: alert('12 13 14 15')
    break
    case 12: alert('13 14 15')
    break
    case 13: alert('14 15')
    break
    case 14: alert('15')
    break
    case 15: alert('')
    break
}
alert("Сильно надеюсь, что неверно понял задание, инчае я просто не понял, зачем именно так это делать))")


alert('Task 5')

funcSum = (num1, num2) => num1 + num2
funcSubtraction = (num1, num2) => num1 - num2
funcMultiplication = (num1, num2) => num1 * num2
funcDivision = (num1, num2) => num1 / num2


alert('Task 6')

function calculator (num1, num2, operation) {

    switch (operation) {
        case '+':
            return funcSum(num1, num2)
        case '-':
            return funcSubtraction(num1, num2)
        case '*':
            return funcMultiplication(num1, num2)
        case '/':
            return funcDivision(num1, num2)
    }
}


alert('Task 7')

// 0 != null потому что это разные типы, 0 - число, null - объект. Вообще в JS всё - объект,
// и число тоже, так что 0 и нулл просто разные объекты, которые не равны друг-другу.


alert('Task 8')

function power(val, pow) {
    if (pow > 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }

}
