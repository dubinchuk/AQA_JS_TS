// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

function toCamelCase (sentence) {
    const splitSentence = sentence.toLowerCase().split(' ');
    let camelCaseSentence = splitSentence[0];
    for (let i = 1; i < splitSentence.length; i++) {
        const splitWord = splitSentence[i].split('');
        splitWord[0] = splitWord[0].toUpperCase();;
        const camelCaseWord = splitWord.join('');
        camelCaseSentence += camelCaseWord;
        if (i == splitSentence.length - 1) {
            return camelCaseSentence;
        }
    }
}
console.log(toCamelCase('I am super engineer'));
