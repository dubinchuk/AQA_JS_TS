// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname; поле number - experienceYears,
//       Метод, возвращающий строку: getDetails().

//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
  
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

interface Person {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails(): string;
};

abstract class Employee implements Person {
    protected salary: number = 0;
    constructor (
        public name: string,
        public surname: string,
        public experienceYears: number
    )
    { 
        this.getDetails();
    }

    getDetails() {
            return this.name;
        }
    protected abstract calculateSalary(): number;

}

class Manager extends Employee {
    constructor (
        public name: string,
        public surname: string,
        public experienceYears: number,
        public prefered: 'scrum' | 'kanban'
    )
    {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): number {
        return this.experienceYears * 500;        
    }
    
    getDetails(): string {
        this.salary = this.calculateSalary();
        return `My name is ${this.name}, I am manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`;
    }
}

class Developer extends Employee {
    constructor (
        public name: string,
        public surname: string,
        public experienceYears: number,
        public programmingLanguage: 'js' | 'ts' | 'java' | 'python'
    )
    {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): number {
        return this.experienceYears * 1000;
    }
    getDetails(): string {
        this.salary = this.calculateSalary();
        return `My name is ${this.name}, I am developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`;
    }
}

const manager = new Manager('Alina', 'Managerovna', 5, 'scrum');
console.log(manager.getDetails());
const developer = new Developer('Elena', 'TSovna', 6, 'ts');
console.log(developer.getDetails());