// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
//   Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
//     1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('After 3 seconds'), 3000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('After 5 seconds'), 5000);
})

promise1.then(result => console.log(result));
promise2.then(result => console.log(result));

Promise.all([promise1, promise2]).then((responses) => {
    for (const resp of responses) {
        console.log(resp);
    }
});

Promise.allSettled([promise1, promise2]).then((responses) => {
    for (const resp of responses) {
        console.log(resp);
    }
});

async function resolvePromises (promise1, promise2) {
    try {
        const [promise1Result, promise2Result] = [await Promise.all([promise1, promise2]), await Promise.allSettled([promise1, promise2])];
        console.log(promise1Result);
        console.log(promise2Result);
    }
    catch (error) {
        return error;
    }
}

resolvePromises(promise1, promise2);