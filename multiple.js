function multiply(num1, num2) {
    return num1 * num2;
}

function userPrompt(prompt) {
    let rlSync = require('readline-sync');
    return Number(rlSync.question(prompt));
}

let firstNum = userPrompt('Enter the first number: ');
let secondNum = userPrompt('Enter the second number: ');

console.log(multiply(firstNum, secondNum));