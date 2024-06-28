// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

const numbers = [2, 8, 3, 7, 5, 1, 6, 8, 10, 12, 11, 8, 12, 6, 9];

function findMissingNumber(arr = []) {
    if (!(Array.isArray(arr) && arr.every(element => typeof element === 'number'))) {
        throw new Error('Введите корректные данные');
    }
    const sortNumbers = [...new Set(arr)].sort((a, b) => a - b);
    const result = sortNumbers.find((number, index) => number !== index + 1);
    if (result > 0) {
        return result - 1;
    } else {
        return 'Пропущенных чисел нет';
    }
}

console.log(findMissingNumber(numbers));