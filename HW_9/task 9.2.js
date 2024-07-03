// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()
// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
//     На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку
// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Animal {
    constructor (type, color, weight, height, place_of_origin) {
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.height = height;
      this.place_of_origin = place_of_origin;
    }
    getInfo() {
      return `Type of animal - ${this.type}, color - ${this.color}, weight - ${this.weight} kg, height - ${this.height} cm, place of origin - ${this.place_of_origin}`;
    }
    get color() {
      return this._color;
    }
    set color(newColor) {
      const validColors = ['red', 'black', 'white', 'blue'];
      newColor.toLowerCase();
      if (!validColors.includes(newColor)) throw new Error('Wrong color');
      this._color = newColor;
    }
}
  
class Snake extends Animal {
    #isPoisonous;
    constructor (type, color, weight, height, place_of_origin, isPoisonous) {
      super(type, color, weight, height, place_of_origin);
      this.#isPoisonous = isPoisonous;
    }
    checkPoisonous() {
      if (this.#isPoisonous) return `${this.type} is poisonous`;
      return `${this.type} is not poisonous`;
    }
}

class Bird extends Animal {
    #isFlying;
    constructor(type, color, weight, height, place_of_origin, isFlying) {
        super(type, color, weight, height, place_of_origin);
        this.#isFlying = isFlying;
    }
    checkFlying() {
        if (this.#isFlying) return `${this.type} is flying`;
        return `${this.type} is not flying`;
    }
}

class CatLike extends Animal {
    constructor(type, color, weight, height, place_of_origin, isSafeToPet) {
        super(type, color, weight, height, place_of_origin);
        this.isSafeToPet = isSafeToPet;
    }
    checkSafeToPet() {
        if (this.isSafeToPet) return `${this.type} is safe to pet`;
        return `${this.type} is not safe to pet`;
    }
}

class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Zoo {
    constructor(address, title, ticket_price) {
        this.address = address;
        this.title = title;
        this.ticket_price = ticket_price;
        this.workers = [];
        this.animals = [];
    }
    get address() {
        return this._address;
    }
    set address(newAddress) {
        return this._address = newAddress;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        return this._title = newTitle;
    }
    get ticket_price() {
        return this._ticket_price;
    }
    set ticket_price(newTicketPrice) {
        return this._ticket_price = newTicketPrice;
    }

    addWorker(worker = {firstName, lastName, phone}) {
        if (worker instanceof Worker) return this.workers.push(worker);
        throw new Error(`${worker} is not worker`);
    }

    addAnimal(animal = {type, color, weight, height, place_of_origin}) {
        if (!(animal instanceof Animal)) {
            throw new Error (`${animal} не является животным`);
        }
        else if (animal instanceof Snake) {
            throw new Error('There will be no snakes, mister Potter!');
        }
        this.animals.push(animal);
    }
    removeWorker(firstName, lastName) {
        const indexOfWorker = this.workers.indexOf(this.workers.find(worker => worker.firstName === firstName && worker.lastName === lastName));
        if (indexOfWorker === -1) throw new Error('No workers found');
        this.workers.splice(indexOfWorker, 1);
    }
    removeAnimal(type) {
        const indexOfAnimal = this.animals.indexOf(this.animals.find(animal => animal.type === type));
        if (indexOfAnimal === -1) throw new Error('No animals found');
        this.animals.splice(indexOfAnimal, 1);
    }
}

const zoo = new Zoo()
zoo.addWorker(new Worker('Ivan', 'Ivanov', +79571374757));
zoo.addWorker(new Worker('Petr', 'Petrov', +79581384858));
zoo.addAnimal(new Animal('honeybadger', 'black', 10, 90, 'Africa'));
zoo.addAnimal(new Bird('spur_goose', 'black', 5, 80, 'Africa'));
zoo.addAnimal(new CatLike('cat', 'white', 4, 60, 'Eurasia', true))
// zoo.addAnimal(new Snake('viper', 'black', 0.1, 50, 'Europe', true));
console.log(zoo);
zoo.removeWorker('Petr', 'Petrov');
zoo.removeAnimal('cat');
console.log(zoo);