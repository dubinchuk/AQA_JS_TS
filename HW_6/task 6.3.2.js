// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d

// уточнённые условия: вводятся только строчные буквы; 'zz' даёт результат 'a'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function letterReplacement(word) {
    if (!(typeof word == 'string' && /^[a-zA-Z]+$/.test(word))) {
        throw new Error('Введите корректные данные');
    }

    let wordArr = word.split('');

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == wordArr[i - 1]) {    
            i -= 2;
        }
        if ((wordArr[i] == wordArr[i + 1]) && wordArr[i] == alphabet[alphabet.length - 1]) {
            wordArr.splice(i, 2, alphabet[0]);
            i--;
        }
        if (wordArr[i] == wordArr[i + 1]) {
           const replacementLetterIndex = alphabet.indexOf(wordArr[i]) + 1;
            wordArr.splice(i, 2, alphabet[replacementLetterIndex]);
            i--;
        }
    }

    return wordArr.join('');
}

console.log(letterReplacement('aabc'));
console.log(letterReplacement('aabcaabczzzzbaab'));