// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const calculatePrices = (prices) => {
    if (!(Array.isArray(prices) && prices.every(el => typeof el === 'number'))) {
        throw new Error('Введите корректные данные');
    }
    const sumPrices = prices.reduce((result, price) => result + price, 0);
    const avgPrice = sumPrices / prices.length;

    return `Итого: ${sumPrices} $, средняя цена товара ${avgPrice} $`;
}

console.log(calculatePrices(prices));