// Task 3.
// 1. Создайте корзину в интернет магазине! 
//     Создайте объект shoppingCart и его интерфейс!:
//       items (array of products), each product should have:
//         id (number)
//         name (string)
//         price (number)
//         quantity (number)
//     Добавьте методы к этому объекту:

//     addItem(item) - Adds a new item to the cart.
//     removeItem(id) - Removes an item from the cart by its id.
//     getTotalPrice() - Returns the total price of the items in the cart.
//     checkout() - Empties the cart and returns the total price.

//     Пример:
//     interface IShoppingCart { //implement }
//     const cart: IShippingCart = {
//     items: [
//         { id: 1, name: "Laptop", price: 1000, quantity: 1 },
//         { id: 2, name: "Phone", price: 500, quantity: 2 }
//     ],
//     addItem: function(item) {
//         //implement
//     },
//     removeItem: function(id) {
//         //implement
//     },
//     getTotalPrice: function() {
//         //implement
//     },
//     checkout: function() {
//         //implement
//     }
// };

interface Item {
    id: number;
    name: string;
    price: number;
    quantity:number;
}

interface IShoppingCart {
    items: Item[];
    addItem: (item: Item) => number;
    removeItem: (id: number) => void;
    getTotalPrice: () => number;
    checkout: () => number;
}

const item = { id: 5, name: "PC", price: 1500, quantity: 1 };

const cart: IShoppingCart = {
    items: [
        { id: 1, name: "Laptop", price: 1000, quantity: 1 },
        { id: 2, name: "Phone", price: 500, quantity: 2 },
    ],
    addItem: (item) => cart.items.push(item),
    removeItem: (id) => {
        const index = cart.items.findIndex(item => item.id === id);
        if (index === -1) throw new Error(`id ${id} doesn't exist in the cart`);
        cart.items.splice(index, 1);
    },
    getTotalPrice: () => {
        let result = 0;
        cart.items.forEach(item => {
            result += item.price * item.quantity;
        })
        return result;
    },
    checkout: () => {
        const result = cart.getTotalPrice();
        cart.items = [];
        return result;
    }
}

cart.addItem(item);
console.log(cart.items);
cart.removeItem(1);
console.log(cart);
console.log(cart.getTotalPrice());
console.log(cart.checkout());
console.log(cart);
