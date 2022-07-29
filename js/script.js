'use strict';
//1
// const x = 10;
// const y = 7;
// let example = x > y ? 'x больше, чем y' : 'x не больше, чем y';
// alert( example);

//2
// const num = +prompt('please, enter the number');
// if (num % 2 === 0) {
//   alert('Число ' + `${num}` + ' -чётное')
// } else  {
//   alert('Число ' + `${num}` + ' -нечётное')
// }

//3
// let num = prompt('Введите целое число.');
// if (num > 0) {
//   alert('Число ' + `${num}` + ' однозначно положительное.');
//   alert(num.length);
// } else if (num < 0) {
//   alert('Число ' + `${num}` + ' однозначно отрицательное.');
//   alert(num.length);
// }

//4
// const num1 = +prompt('введите число 1');
// const num2 = +prompt('введите число 2');
// const num3 = +prompt('введите число 3');
// if (Math.max(num1 || num2 || num3)) {
//   alert('Наибольшее число из введенных Вами - ' + `${Math.max(num1 , num2, num3)}`);
// }

//5
// const side1 = +prompt('Введите длину стороны 1.');
// const side2 = +prompt('Введите длину стороны 2.');
// const side3 = +prompt('Введите длину стороны 3.');
// if ((side1 + side2) > side3) {
//   alert('Поздравляю! Ваш треугольник имеет право на существование!');
// } else if((side3 + side2) > side1) {
//   alert('Поздравляю! Ваш треугольник имеет право на существование!');
// } else if ((side3 + side1) > side2) {
//   alert('Поздравляю! Ваш треугольник имеет право на существование!');
// } else {
//   alert('К сожалению , такого треугольника не может быть :(')
// }
