// Task 1
// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).

function getFirstElement<T>(array: T[]): T {
    return array[1];
}

const arr1: Array<number> = [2, 5, 15, 2];
const arr2: Array<string> = ['hello', 'thank you', 'goodbye'];
console.log(getFirstElement(arr1));
console.log(getFirstElement(arr2));