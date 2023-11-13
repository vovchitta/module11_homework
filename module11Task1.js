// Модуль 11. Задание 1

function inputIdentification() {
let value = prompt ('Введите значение')
let number = +value;
if (value === null || value.trim() === '') {
    console.log('Вы отменили ввод или ввели пустую строку');
} else {
    if (typeof number === 'number') {
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            console.log ('Введено чётное число')
        } else {
            console.log ('Введено нечётное число')
        }
    } else {
        console.log ('Упс, кажется, вы ошиблись')
    }
}
}
}
inputIdentification();