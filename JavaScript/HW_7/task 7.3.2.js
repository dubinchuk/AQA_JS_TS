// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.

const cardsJson = require('./cards.json');

const removeDuplicates = (arr) => [... new Set(arr.map(el => JSON.stringify(el)))].map(el => JSON.parse(el));

console.log(removeDuplicates(cardsJson));