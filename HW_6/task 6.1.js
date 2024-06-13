// Task 1
// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null

function getEmployeeInfo(employeeName) {
    if (!(typeof employeeName == 'string' && /^[a-zA-ZА-Яа-яёЁ-\s]+$/.test(employeeName))) {
        throw new Error('Введите корректные данные');
    }

    const employees = ['Ivan Ivanov', 'Petr Petrov', 'Alexey Alexeev', 'Elena Elenova', 'Fedor Fedorov'];
    const salary = ['2000', '1500', '1700', '2100', '2400'];
    
    for (let i = 0; i < employees.length; i++) {
        if (employeeName == employees[i]) {
            const employeeInfo = [];
            employeeInfo.push(employees[i], salary[i]);
            return employeeInfo;
        } 
    }

    return null;
}

console.log(getEmployeeInfo('Petr Petrov'));
console.log(getEmployeeInfo('Ivan Petrov'));