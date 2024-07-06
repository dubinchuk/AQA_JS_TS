// Task 3
// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function sum(number) {
    if (typeof number !== 'number') {
        throw new Error('Введите корректные данные');
    }

    let numberArr = String(number).split('');
    let sumOfDitigs = 0;

    for (let i = 0; i < numberArr.length; i++) {
        sumOfDitigs += +numberArr[i];
        if (i == numberArr.length - 1 && sumOfDitigs > 9) {
            numberArr = String(sumOfDitigs).split('');
            sumOfDitigs = 0;
            i = -1;
        }
    }

    return sumOfDitigs;
}

console.log(sum(19));
console.log(sum(2998919));
