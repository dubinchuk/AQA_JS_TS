// Task 1

// 1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:     
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')
// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
// 10. Сделайте поле isPoisonous приватным в классе Snake

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

const honeybadger = new Animal('honeybadger', 'black', 10, 90, 'Africa');
console.log(honeybadger.getInfo());
const bear = new Animal('bear', 'brown', 400, 150, 'Russia');
console.log(bear.getInfo())

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

const viper = new Snake('viper', 'black', 0.1, 50, 'Europe', true);
console.log(viper.getInfo());
console.log(viper.checkPoisonous());

const uzh = new Snake('uzh', 'black', 0.3, 100, 'Europe', false)
console.log(uzh.getInfo());
console.log(uzh.checkPoisonous());