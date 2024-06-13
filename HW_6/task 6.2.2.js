// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.


// Пояснения по коду. 
// По условиям задачи функция принимает только слова, разделённые пробелами, соответственно в первой проверке отсекаем все остальные символы. 
// Оставляем слова с дефисами, т.к. дефис может являться частью слова, но отсекаем возможные тире, которые могут стоять между словами. 
// При проверке количества букв в слове убираем дефисы из подсчёта, т.к. они не являются буквами.
// Но т.к. в предложении могут встречаться другие знаки препинания кроме пробела (тире, двоеточие и т.п.), стоит это добавить в условия задачи

function longestWord(sentence) {
    if (!(typeof sentence == 'string' && /^[...a-zA-ZА-Яа-яёЁ-\s]+$/.test(sentence) && !/-\s|\s-/.test(sentence))) {
        throw new Error('Введите корректные данные');
    }

    const words = sentence.split(' ');
    const wordLength = [];
    const result = [];

    for (let word of words) {
        let checkDash = word.split('')
        
        for (let i = 0; i < checkDash.length; i++) {
            if (checkDash[i] == '-') {
                checkDash.splice(checkDash[i], 1);
                word = checkDash;
            }

        } 
        wordLength.push(word.length);

    }
    const maxWordLength = Math.max(...wordLength);

    for (let i = 0; i < wordLength.length; i++) {
        if (wordLength[i] == maxWordLength) {
            result.push(words[i]);
        }
    }
    
    if (result.length == 1){
        return `Самое длинное слово в предложении "${sentence}" - ${result}`;
    } else {
        return `Самые длинные слова в предложении "${sentence}": \n${result.join('\n')}`;
    }
}

console.log(longestWord('Давайте найдём самые длинные слова'));
console.log(longestWord('В Кот-Д-Ивуаре производят какао для создания шоколада'));
console.log(longestWord('JavaScript is one love'));