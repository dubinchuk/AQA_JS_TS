export{}
// Task 2
// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 

interface IEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    address?: IAddress;
}

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    occupation: OCCUPATION;
    address?: IAddress;
    projectNames: string[];
}

interface IAddress {
    country: string,
    street: string,
    house: number | string,
    flat: number,
}

type Grade = 'junior' | 'middle' | 'senior';

enum OCCUPATION {
    DEVELOPER = 'Developer',
    QA = "QA Engineer",
    PM = 'Product manager',
    SYSADMIN = 'System administrator',
    DATA_SCIENTIST= 'Data scientist',
}

const andrey: IEmployee = {
    name: 'Andrey',
    surname: 'Gavrilov',
    salary: 700,
    address: {
        country: 'Belarus',
        street: 'Lukashenko',
        house: 35,
        flat: 5,
    },
}

const vlad: ItEmployee = {
    name: 'Vlad',
    surname: 'Razrabov',
    salary: 1000,
    grade: 'junior',
    occupation: OCCUPATION.QA,
    address: {
        country: 'Russia',
        street: 'Lenina',
        house: '5B',
        flat: 75
    },
    projectNames: ['Smoke', 'Regression', 'Re-test'],
}

function isItEmployee(employee: IEmployee | ItEmployee): employee is ItEmployee {
    return 'grade' in employee;
}

function getEmployeeInfo(employee: IEmployee | ItEmployee) {
    if (isItEmployee(employee)) {
        if ('address' in employee) {
            console.log(`Employee ${employee.name} ${employee.surname} works as ${employee.occupation} at ${employee.grade} grade, runs ${employee.projectNames.join(', ')} projects, earns $${employee.salary} and lives at the following address: ${employee.address?.country}, ${employee.address?.street} street, house ${employee.address?.house}, apt ${employee.address?.flat}`);
        } else {
            console.log(`Employee ${employee.name} ${employee.surname} works as ${employee.occupation} at ${employee.grade} grade, runs ${employee.projectNames.join(', ')} projects and earns $${employee.salary}`);
        }
    } else {
        if ('address' in employee) {
            console.log(`Employee ${employee.name} ${employee.surname} earns $${employee.salary} and lives at this address: ${employee.address?.country}, ${employee.address?.street} street, house ${employee.address?.house}, apt ${employee.address?.flat}`);
        } else {
            console.log(`Employee ${employee.name} ${employee.surname} earns $${employee.salary}`);
        }
    }
}

getEmployeeInfo(vlad);
getEmployeeInfo(andrey);