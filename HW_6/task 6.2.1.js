// Task 2
// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function checkPizzas(myPizzas) {
    if (!Array.isArray(myPizzas)) {
        throw new Error('Введите корректные данные');
    }
    
    const result = [];
    
    for (const pizza of myPizzas) {       
        if (!competitorPizzas.includes(pizza)){
            result.push(pizza);
        }
    }
    
    return result.length ? result : null;
}

console.log(checkPizzas(['hawai', 'Margarita', '4 cheeses', 'Diablo', 'Superhot', 'Double Mozarella']));
console.log(checkPizzas(['Margarita', 'Superhot']));
console.log(checkPizzas(['Diablo', 'Caprichosa']));