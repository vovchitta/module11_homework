// Модуль 11. Задание 2

function isPrime(number) {
    if (number > 1000) {
    return "Данные неверны, введите число не больше 1000.";
    }
    if (number <= 1) {
    return "Число не является простым.";
    } else if (number === 2) {
    return "Число является простым.";
    } else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
        return "Число не является простым.";
        }
    }
    return "Число является простым.";
    }
}
const input = prompt("Введите число: ");
const number = parseInt(input);
const result = isPrime(number);
console.log(result);