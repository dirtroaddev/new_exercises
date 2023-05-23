let readlineSync = require('readline-sync');

let age = Number(readlineSync.question('What is your age? '));
console.log(`you are ${age} yeas old.`);
for (let i = 10; i <= 40; i += 10) {
    console.log(`in ${i} years you will be ${age + i} years old.`);
}

// console.log(`you are ${age} yeas old.`);
// console.log(`in 10 you will be ${age + 10} years old.`);
// console.log(`in 20 you will be ${age + 20} years old.`);
// console.log(`in 30 you will be ${age + 30} years old.`);
// console.log(`in 40 you will be ${age + 40} years old.`);