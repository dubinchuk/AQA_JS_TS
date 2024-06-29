// Ниже найдете разноуровневый массив объектов company, очень похожий на массив из прошлого задания,
//   только количество вложенностей может быть не ограничено.
//   Задание: написать функцию:
//   Функция строит древовидный список компании.
//   При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с
//   соблюдением вложенности подразделений.

const company = [
  {
    id: 1,
    name: 'Компания',
    parent: null,
    users_count: 10,
    children: [
      {
        id: 2,
        name: 'Отдел тестирования',
        parent: 1,
        users_count: 7,
        children: [
          {
            id: 2,
            name: 'Тестирование Web',
            parent: 2,
            users_count: 5,
          },
          {
            id: 3,
            name: 'Тестирование Mobile',
            parent: 2,
            users_count: 0,
          },
        ],
      },
      {
        id: 4,
        name: 'Отдел маркетинга',
        parent: 1,
        users_count: 30,
      },
      {
        id: 5,
        name: 'Администрация',
        parent: 1,
        users_count: 25,
        children: [
          {
            id: 6,
            name: 'Бухгалтерия',
            parent: 5,
            users_count: 10,
          },
          {
            id: 7,
            name: 'Менеджмент',
            parent: 5,
            users_count: 15,
            children: [
              {
                id: 8,
                name: 'Подраздел менеджмента 1',
                parent: 7,
                users_count: 5,
              },
              {
                id: 9,
                name: 'Подраздел менеджмента 2',
                parent: 7,
                users_count: 10,
              },
            ],
          },
          {
            id: 10,
            name: 'HR',
            parent: 5,
            users_count: 1,
          },
        ],
      },
    ],
  },
];

const countUsers = (comp) => {
  comp = structuredClone(comp);
  comp.forEach(dept => {
    if (dept.children) {
      const subdeptCount = dept.children.reduce((acc, subdept) => acc + countUsers([subdept])[0].users_count, 0);
      dept.users_count = dept.users_count + subdeptCount;
    }
  });
  
  return comp;
}

const companyStructure = (comp, indent = 0) => {
  const nestedLevel = ' '.repeat(indent * 4)
  comp.forEach(dept => {
    const result = `${nestedLevel}${dept.name} (${dept.users_count} сотрудников)`;
    console.log(result);
    
    if (dept.children) {
      companyStructure(dept.children, indent + 1);
    }
  });
}

companyStructure(countUsers(company));