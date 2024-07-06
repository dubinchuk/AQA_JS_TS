// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

type ArrNum = number[];

const numbers: ArrNum = [1, -5, 2, 3, 4, 133];

function filter(array: ArrNum, callback: (n: number) => boolean) {
    return array.filter(callback);
}

console.log(filter(numbers, (n) => n > 3));
console.log(filter(numbers, (n) => n % 2 === 0));
