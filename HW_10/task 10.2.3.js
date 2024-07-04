// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch

const sum = (a, b) => {
    const promise = new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Enter numbers only');
        }
    });
    return promise;
}

sum(1, 2)
    .then((result) => console.log(result))
    .catch((error) => {
        throw new Error(error);
    });

sum(1, '2')
    .then((result) => console.log(result))
    .catch((error) => {
        throw new Error(error);
    });

async function resolveSum(promise) {
    try {
        const result = await promise;
        console.log(result);
    }
    catch(error) {
        throw new Error(error);
    }
}

resolveSum(sum(3, 8));
resolveSum(sum('3', 8));