// Task 2. Перед вами структура компании, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: 'Предприятие 1',
    departments: [
      {
        id: 2,
        name: 'Отдел тестирования',
        employees_count: 10,
      },
      {
        id: 3,
        name: 'Отдел маркетинга',
        employees_count: 20,
      },
      {
        id: 4,
        name: 'Администрация',
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: 'Предприятие 2',
    departments: [
      {
        id: 6,
        name: 'Отдел разработки',
        employees_count: 50,
      },
      {
        id: 7,
        name: 'Отдел маркетинга',
        employees_count: 20,
      },
      {
        id: 8,
        name: 'Отдел охраны труда',
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: 'Предприятие 3',
    departments: [
      {
        id: 10,
        name: 'Отдел аналитики',
        employees_count: 0,
      },
    ],
  },
];

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
// Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

const enterpriseStructure = (enterprises) => {
    enterprises.map(enterprise => {
        const totalEmployees = enterprise.departments.reduce((acc, department) => acc + department.employees_count, 0);
        if (/.*1$/.test(totalEmployees) && !/.*11$/.test(totalEmployees)) {
            console.log(`${enterprise.name} (${totalEmployees} сотрудник)`);
        } else {
        console.log(`${enterprise.name} (${totalEmployees} сотрудников)`);
        }
        enterprise.departments.map(department => {
            if (/.*1$/.test(department.employees_count) && !/.*11$/.test(department.employees_count)) {
                console.log(`- ${department.name} (${department.employees_count} сотрудник)`);
            } else {
            console.log(`- ${department.name} (${department.employees_count} сотрудников)`);
            }
        });
    });
}

enterpriseStructure(enterprises);

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

// Функция-помощник для получения предприятия по id отдела или названию отдела:
const getEnterpriseByDepartment = (idOrName) => enterprises.filter((enterprise) => enterprise.departments.find((department) => department.id === idOrName || department.name === idOrName));

const getEnterpriseName = (idOrName) => {
  const enterpriseFound = getEnterpriseByDepartment(idOrName);
  if (enterpriseFound == 0) throw new Error('Нет предприятия с данным id отдела или названием отдела');
  
  return enterpriseFound.map(enterprise => enterprise.name).join(', ');
}

console.log(getEnterpriseName(4));
console.log(getEnterpriseName("Отдел маркетинга"));

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// Функция-помощник для создания нового id
const newId = () => {
  ids = [];
  enterprises.forEach((enterprise) => {
    ids.push(enterprise.id);
    ids.push(enterprise.departments.map(department => department.id));
  });
  const maxId = Math.max(...ids.flat());
  
  return maxId + 1;
};

const addEnterprise = (newEnterprise) => {
  enterprises.push({
    id: newId(enterprises),
    name: newEnterprise,
    departments: [],
  })
  
  return JSON.stringify(enterprises);
}

console.log(addEnterprise('Предприятие 4'));

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// Функция-помощник для получения предприятия по id предприятия
const getEnterpriseById = (id, []) =>
enterprises.filter((enterprise) => enterprise.id === id);

const addDepartment = (id, newDepartment) => {
  const enterpriseFound = getEnterpriseById(id, enterprises);
  if (enterpriseFound != 0) {
    enterpriseFound[0].departments.push({
      id: newId(enterprises),
      name: newDepartment,
      employees_count: null,
    });
    
    return JSON.stringify(enterprises);
  }
  
  throw new Error('Предприятия с данным id не существует');
}

console.log(addDepartment(1, "Отдел бездельников"));

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = (id, newName) => {
  const foundEnterprise = getEnterpriseById(id, enterprises);
  if (foundEnterprise == 0) throw new Error('Предприятия с данным id не существует');
  foundEnterprise[0].name = newName;
  
  return JSON.stringify(enterprises);
}

console.log(editEnterprise(1, 'ООО "Рога и копыта"'));

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// Функция-помощник для получения отдела по id отдела
const getDepartmentById = (id, []) => {
  let result;
  enterprises.forEach((enterprise) => enterprise.departments.forEach((department) => {
      if (department.id === id) {
        result = department;
      }
    })
  );
  
  return result;
};

const editDepartment = (id, newName) => {
  const foundDepartment = getDepartmentById(id, enterprises);
  if (foundDepartment == undefined) throw new Error('Отдела с данным id не существует');
  foundDepartment.name = newName;
  
  return JSON.stringify(enterprises);
}

console.log(editDepartment(7, "Новое название отдела"));

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

const deleteEnterprise = (id) => {
  const foundEnterprise = getEnterpriseById(id, enterprises);
  if (foundEnterprise.length === 0) throw new Error('Предприятия с данным id не существует');
  
  const findIndex = enterprises.indexOf(...foundEnterprise);
  enterprises.splice(findIndex, 1)
  
  return enterprises;
}

console.log(deleteEnterprise(1));

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

const deleteDepartment = (id) => {
  if (typeof id != 'number') throw new Error('Введите верные данные');
  const foundEnterprise = getEnterpriseByDepartment(id);
  
  if (foundEnterprise.length === 0) throw new Error('Отдела с данным id не существует');
  const findObject = foundEnterprise[0].departments.filter(department => department.id === id);
  
  if (findObject[0].employees_count !== 0) throw new Error('Нельзя удалить отдел с сотрудниками');
  const findIndexOfDepartment = foundEnterprise[0].departments.indexOf(...findObject);
  foundEnterprise[0].departments.splice(findIndexOfDepartment, 1);
  
  return JSON.stringify(enterprises);
}

console.log(deleteDepartment(3));
console.log(deleteDepartment(10));

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

const moveEmployees = (id1, id2) => {
  const getFromDepartment = getDepartmentById(id1, enterprises);
  const addToDepartment = getDepartmentById(id2, enterprises);
  
  addToDepartment.employees_count += getFromDepartment.employees_count;
  getFromDepartment.employees_count = 0;
  
  return JSON.stringify(enterprises);
};

console.log(moveEmployees(2, 3));