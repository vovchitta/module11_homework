// Модуль 11. Задание 4

function row(first, last) {
    let current = first;
    const interval = setInterval(function () {
    console.log(current);
    if (current === last) {
        clearInterval(interval);
    } else {
        current++;
    }
    }, 1000);
}
row(5, 15);