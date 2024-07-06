// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб

const asterisk = '*';
const space = ' ';
const cycleCount = 10;
let asteriskResult = asterisk;
let asteriskCount = 1;

for (let i = 1; i <= cycleCount; i++) {
    const spaceResult = space.repeat(cycleCount - i);
    console.log(spaceResult + asteriskResult + spaceResult);
    asteriskResult = asterisk.repeat(asteriskCount + 2);
    asteriskCount += 2;
}

// добавляем ромб

let asteriskForRhomb = (cycleCount * 2) - 1;
let spaceCount = 1;

for (let i = cycleCount; i > 1; i--) {
    asteriskResult = asterisk.repeat(asteriskForRhomb - 2);
    asteriskForRhomb -= 2;
    const spaceResult = space.repeat(spaceCount);
    console.log(spaceResult + asteriskResult + spaceResult);
    spaceCount++;
}