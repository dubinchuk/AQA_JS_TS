// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 

type Obj = { [key: string]: string | number | boolean } | Obj[];

const object: Obj = {
    key1: 'hello',
    key2: 1,
    key3: true,
    key4: false,
}

const array: Obj = [ 
    {
        key1: 1000,
        key2: 'hi',
    }, 
    {
        key1: true,
        key2: false,
        key3: 40,
    }
];

type CountValues = {
    string: number;
    number: number;
    boolean: number;
}

function count(obj: Obj) {
    let result: CountValues = { string: 0, number: 0, boolean: 0 };
    for (const value of Object.values(obj)) {
        if (typeof value === 'string') {
            result.string++;
        }
        else if (typeof value === 'number') {
            result.number++;
        } else {
            result.boolean++;
        }
    }
    return result;
}

function countValues(data: Obj) {
    if(Array.isArray(data)){
        let result: CountValues = { string: 0, number: 0, boolean: 0 }
        data.forEach(obj => {
            const countValues = count(obj);
            result.string += countValues.string;
            result.number += countValues.number;
            result.boolean += countValues.boolean;
        })
        return result;
    } else {
        return count(data);
    }
}

console.log(countValues(array));
console.log(countValues(object));
