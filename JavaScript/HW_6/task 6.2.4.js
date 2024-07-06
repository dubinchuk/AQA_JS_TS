// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkIfPalindrom(word) {
    if (!(typeof word == 'string' && /^[...a-zA-ZА-Яа-яёЁ-]+$/.test(word))) {
        throw new Error('Введите корректные данные');
    }

    const wordArr = word.toLowerCase().split('');
    let reverseWord = [];
    let j = 1;

    for (let i = 0; i < wordArr.length; i++) {
        reverseWord += wordArr[wordArr.length - j];
        j++;
    }
    
    if (word.toLowerCase() == reverseWord.toString('')) {
        return `Слово "${word}" является палиндромом`;
    } else {
        return `Слово "${word}" не является палиндромом`;
    }
}

console.log(checkIfPalindrom('Tenet'));
console.log(checkIfPalindrom('JavaScript'));

// Решение через метод reverse()

function checkIfPalindrom2(word) {
    if (!(typeof word == 'string' && /^[...a-zA-ZА-Яа-яёЁ-]+$/.test(word))) {
        throw new Error('Введите корректные данные');
    }

    const wordArr = word.toLowerCase().split('');
    const reverseWord = [...wordArr].reverse()
    
    if (word.toLowerCase() == reverseWord.join('')) {
        return `Слово "${word}" является палиндромом`;
    } else {
        return `Слово "${word}" не является палиндромом`;
    }
}

console.log(checkIfPalindrom2('Tenet'));
console.log(checkIfPalindrom2('JavaScript'));