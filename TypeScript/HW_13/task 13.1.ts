// Task 1
// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
// 4. Создайте тип UserType из объекта QA (используйте typeof)
// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
// 9. Создайте тип, для массива объектов, где в ключах могут быть строки, в значениях number, string или boolean

interface IEmployee {
    name: string,
    salary: number,
    isManager: boolean
}

const QA: IEmployee = {
    name: 'Alex',
    salary: 1000,
    isManager: true
}

type EmployeeKeys = keyof IEmployee;

type QaKeys = keyof typeof QA;

type UserType = typeof QA;

type OptionalEmployee = Partial<IEmployee>;

type NameSalaryEmployee = Pick<IEmployee, 'name' | 'salary'>;

type OmitIsManager = Omit<IEmployee, 'isManager'>;

type ReadonlyManager = Readonly<IEmployee>;

type AttObj = Record<string, number | string | boolean>[];