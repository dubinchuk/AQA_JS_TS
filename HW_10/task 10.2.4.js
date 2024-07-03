// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((objects) => {
        const id = 1;
        const result = objects.filter(object => object.userId === id);
        console.log(result);
    });

async function getObjectsById(url, id) {
    if (typeof id != 'number') throw new Error('id должен быть числом');
    try {
        const response = await fetch(url);
        const objects = await response.json();
        const result = objects.filter(object => object.userId === id);
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}

getObjectsById(url, 1);