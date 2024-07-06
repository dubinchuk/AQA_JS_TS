// Task 2
// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

const enterBytes = 13154404;
let bytes = enterBytes;
let unit = 'bytes'
let i = 0;

while (bytes >= 1024 && i < 4) {
    bytes = bytes / 1024;
    i++;
}

switch (i) {
    case 1: {
        unit = 'Kb';
        break
    }
    case 2: {
        unit = 'Mb';
        break
    }
    case 3: {
        unit = 'Gb';
        break
    }
    case 4: {
        unit = 'Tb';
        break
    }
}

const result = `${enterBytes} bytes = ${bytes.toFixed(1)} ${unit}`;
console.log(result);