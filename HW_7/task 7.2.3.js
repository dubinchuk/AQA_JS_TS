// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возрастанию количества гласных букв в слове.

const vowels = ['a', 'e', 'i', 'o', 'u'];
const arr = ['JavaScript', 'is', 'the', 'best', 'programming', 'language', 'for', 'QA', 'automation'];

const countVowels = (array) => {
    if (!(Array.isArray(array) && array.every(el => /^[a-zA-Z-]+$/.test(el)))) {
        throw new Error('Введите корректные данные');
    }
    const vowelsCounter = [];
    array.map(word => {
        const counter = word.toLowerCase().split('').filter(letter => vowels.includes(letter)).length;
        vowelsCounter.push(counter);
        });

    const sortIndex = [...vowelsCounter.keys()].sort((a, b) => vowelsCounter[a] - vowelsCounter[b]);
    const result = [];
    sortIndex.map(el => result.push(array[el]));
    return result;
}

console.log(countVowels(arr));