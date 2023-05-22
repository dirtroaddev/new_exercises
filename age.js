let readlineSync = require('readline-sync');

let age = Number(readlineSync.question('What is your age? '));

console.log(`you are ${age} yeas old.`);
console.log(`in 10 you will be ${age + 10} years old.`);
console.log(`in 20 you will be ${age + 20} years old.`);
console.log(`in 30 you will be ${age + 30} years old.`);
console.log(`in 40 you will be ${age + 40} years old.`);