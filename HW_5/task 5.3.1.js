// Task 3
// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let countVowels = '';
let countConsonants = '';

const checkWord = function (word) {
    arrWord = word.toLowerCase().split('');
    for (let i = 0; i < arrWord.length; i++) {
        if (vowels.includes(arrWord[i])){
            countVowels++;
        } 
        if (consonants.includes(arrWord[i])){
            countConsonants++;
        } 
    }
    return `Word ${word} contains ${countVowels} vovels and ${countConsonants} consonants`;
}

console.log(checkWord('JavaScript'));
