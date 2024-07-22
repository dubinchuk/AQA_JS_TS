// Task 2
// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище.
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден
//   - getAll(), возвращает все объекты в хранилище

interface IUser {
    id: number;
    [key: string]: unknown;
}

class ObjectStorage<T extends {id: number}> {        // Т.к. имя Storage уже зарезервировано, использовал ObjectStorage
    private storage: T[] = [];
    constructor (items?: T[]) {
        if (items) {
            this.storage.push(...items);
        }
    }

    add(obj: T): void;
    add(obj: Omit<T, 'id'>): void;
    add(obj: T | Omit<T, 'id'>): void {
        if ('id' in obj) {
            this.storage.push(obj);
        } else {
            const ids: number[] = this.storage.map((item: T) => item.id);
            let id: number = 0;
            if (ids.length === 0) {
                id = 1;
            } else {
                id = Math.max(...ids) + 1;
            }
            const newObj = {id, ...obj};
            this.storage.push(newObj as T);
        }
    }
    update(obj: Pick<T, 'id'> & Partial<T>): void {
        const index = this.storage.findIndex(object => object.id === obj.id);
        if (index === -1) throw new Error(`Object with id ${obj.id} does not exist`);
        this.storage[index] = {...this.storage[index], ...obj}
    }
    remove(id: number): void {
        const index = this.storage.findIndex(object => object.id === id);
        if (index === -1) throw new Error(`Object with id ${id} does not exist`);
        this.storage.splice(index, 1);
    }
    getById(id: number) {
        const index = this.storage.findIndex(object => object.id === id);
        return this.storage[index];
    }
    getAll() {
        return this.storage;
    }
}

const storage = new ObjectStorage<IUser>()

// Пример использования:

storage.add({ id: 1, name: 'Anatoly', age: 33 }); // valid
storage.add({ name: 'Elena', age: 25 }); // valid, created with id === 2

storage.update({ id: 1, name: 'Egor' });
storage.update({ id: 2, name: 'Tatiana', age: 33 });

console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]

storage.remove(2);

console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]
