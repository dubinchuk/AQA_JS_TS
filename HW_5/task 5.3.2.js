// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetLow = alphabet.split('');
const alphabetUp = alphabet.toUpperCase().split('');

ceasarEncryption('AbC', -1);
ceasarEncryption('ZzZ', 1);
ceasarEncryption('JavaScript', -5); // скрипт позволяет осуществлять сдвиг не только на +1 и -1, но до 26 в любую из сторон

function ceasarEncryption (word, offset) {
    const wordArr = word.split('');
    let result = '';
    for (let i = 0; i < wordArr.length; i++) {
        const checkLetterLow = alphabetLow.includes(wordArr[i]);
        const checkLetterUp = alphabetUp.includes(wordArr[i]);
        const offsetIndexLow = alphabetLow.indexOf(wordArr[i]);
        const offsetIndexUp = alphabetUp.indexOf(wordArr[i]);
        const offsetIndexLowPlus = offsetIndexLow + offset;
        const offsetIndexUpPlus = offsetIndexUp + offset;
        
        if (checkLetterLow) {
            if (offsetIndexLowPlus >= alphabetLow.length) {
                const offsetLetter = alphabetLow[offsetIndexLowPlus - alphabetLow.length];
                result += offsetLetter;
            } 
            else if (offsetIndexLowPlus < 0) {
                const offsetLetter = alphabetLow[offsetIndexLowPlus + alphabetLow.length];
                result += offsetLetter;
            } else {
                const offsetLetter = alphabetLow[offsetIndexLowPlus];
                result += offsetLetter;
            }
        } 
        if (checkLetterUp) {
            if (offsetIndexUpPlus >= alphabetUp.length) {
                const offsetLetter = alphabetUp[offsetIndexUpPlus - alphabetUp.length];
                result += offsetLetter;
            }
            else if (offsetIndexUpPlus < 0) {
                const offsetLetter = alphabetUp[offsetIndexUpPlus + alphabetUp.length];
                result += offsetLetter;
            } else {
                const offsetLetter = alphabetUp[offsetIndexUpPlus];
                result += offsetLetter;
            }
        }
    }
    console.log(result);
}