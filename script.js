let Num1 = 10;
let Num2 = 2;
let result;
// Сложение +
// result = Num1 + Num2
// console.log( `Сложение чисел равно ${result}`);
// Вычитание -
// result = Num1 - Num2
// console.log( `Вычитание чисел равно ${result}`);
// Умножение *
// result = Num1 * Num2
// console.log( `Умножение чисел равно чисел равно ${result}`);
// Деление /
// result = Num1 / Num2
// console.log( `Деление чисел равно ${result}`);
// Создание калькулятора
alert(`Приветствую!`);
let ask1;
ask1 = Number(prompt(`Первое число?`));
let ask2;
ask2 = Number(prompt(`Второре число?`));
let znak = prompt(`Что вы хотите сделать с числами? /*+-`);
let res;
switch (znak) {
    case `*`:
    res = ask1 * ask2;
    alert(`Умножение чисел равно: ${res}`);
    break;
    case `/`:
    res = ask1 / ask2;
    alert(`Деление чисел равно: ${res}`);
    break;
    case `+`:
    res = ask1 + ask2;
    alert(`Сложение чисел равно: ${res}`);
    break;
    case `-`:
    res = ask1 - ask2;
    alert(`Вычитание чисел равно: ${res}`);
    break;
    default:
    alert(`Вы неправильно написали знак!`);
    break;
}
