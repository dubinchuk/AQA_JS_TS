// Task 2
// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type MapCallback<T, U> = (element: T, index?: number, array?: T[]) => U;

function map<T, U>(array: T[], callback: MapCallback<T, U>): U[] {
  if (array.length === 0) {
    throw new Error('Array cannot be empty'); 
  }
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
};

const callback: MapCallback<number, number> = function(element: number, index?: number): number {
  return element * (index || 0);
};

const arr = [2, 3, 55, 7];

console.log(map(arr, callback));