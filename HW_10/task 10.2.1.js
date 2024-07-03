// Task 2
// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello

function callback() {
    return 'hello';
}

function delay(callback, time) {
    return setTimeout(() => console.log(callback), time);
}

delay(callback(), 2000);