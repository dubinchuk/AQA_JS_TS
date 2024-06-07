// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function uniqueNumbers(numbers) {
    if (typeof numbers == 'object') {
        const checkIfNumbers = numbers.find((item) => !(typeof item == 'number' && /^\d+$/.test(item)));
        
        if (!checkIfNumbers) {
            for (let i = 0; i < numbers.length - 1; i++) {
                for (let j = i + 1; j < numbers.length; j++) {
                    if (numbers[i] == numbers[j]) {
                        numbers.splice(j, 1);
                        j -= 1;
                    }
                }
            }
            
            return numbers;
        }

    }

    throw new Error('Введите корректные данные');
}

console.log(uniqueNumbers([3, 5, 5, 7, 324, 54, 5, 3, 52525, 4536, 5, 78, 324, 4536]))


// решение с использованием Spread оператора:

function uniqueNumbers2(numbers) {
    if (typeof numbers == 'object') {
        const checkIfNumbers = numbers.find((item) => !(typeof item == 'number' && /^\d+$/.test(item)));
        
        if (!checkIfNumbers) {
            numbers = [... new Set(numbers)];
            return numbers;
        }

    }

    throw new Error('Введите корректные данные');
}

console.log(uniqueNumbers2([3, 5, 5, 7, 324, 54, 5, 3, 52525, 4536, 5, 78, 324, 4536]));