// Task 1.
// Имеется массив объектов (ниже). Ваше задание:

const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта

function keys(characters) {
    const result = [];
    characters.forEach(character => result.push(Object.keys(character)));
    console.log(result);
}
keys(characters);

// 2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта

function values(characters) {
    const result = [];
    characters.forEach(character => result.push(Object.values(character)));
    console.log(result);
}
values(characters);

// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)

function keyValueForOf (characters) {
  characters.forEach((character) => {
    for (const [key, value] of Object.entries(character)) {
      console.log(`key = ${key}, value = ${value}`);
    } 
    });
}
keyValueForOf(characters);

// 4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in

function keyValueForIn (characters) {
  characters.forEach((character) => {
    for (const key in character) {
      console.log(`key = ${key}, value = ${character[key]}`);
    } 
    });
}
keyValueForIn(characters);

// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
//    `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
  name: "David",
  age: 30,
  salary: 1000,
  getInfo() {
    return `Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
  }
}

console.log(qa.getInfo());