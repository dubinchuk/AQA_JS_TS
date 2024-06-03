// Task 2 
// 1.
// Реализовать Task 1 через switch

const minAge = 18;
const maxAge = 60;
const age = 61;

switch (true) {
    case age < minAge: {
    console.log(`You don't have access cause your age is ${age}. It's less than ${minAge}`);
    break;
}
    case age >= minAge && age < maxAge: {
    console.log('Welcome !');
    break;
}
    case age > maxAge: {
    console.log('Keep calm and look Culture channel');
    break;
} 
    default: {
    console.log('Technical work');
    break;
}
}