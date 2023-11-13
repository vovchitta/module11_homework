// Модуль 11. Задание 3

function argument(x) {
    return function(y) {
    return x + y;
    };
}
const number = argument(9);
const result = number(10);
console.log(result);