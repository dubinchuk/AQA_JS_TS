// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

const sentence = 'I am the best AQA ever!';

const lettersToDigits = (sentence) => {
    if (!(typeof sentence === 'string')) {
        throw new Error('Введите корректные данные');
    }
    const sentenceArr = [...sentence.toLowerCase('')];
    const result = sentenceArr.map(char => {                      
        if (!/^[a-zA-Z]$/.test(char)) {
            return char;
        } else {
            return sentenceArr.filter(letter => letter === char).length;
        }
    });
    return result.join('');
}

console.log(lettersToDigits(sentence));