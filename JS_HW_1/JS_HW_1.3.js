// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), 
// и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируются

let n = '';
const nSum = function(n){
    if (n >= 1 && n <= 9 && n % 1 === 0) {
        let nString = String(n);
        let result = Number(nString) + Number(nString + nString) + Number(nString + nString + nString);
        alert('Сумма n + nn + nnn = ' + result);
    } else {
        alert('Введите верное значение');
    }
}

let nPrompt = prompt('Введите целое число от 1 до 9');
nSum(nPrompt);