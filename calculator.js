// ask the user for the first number.
// ask the user for the second number.
// ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the terminal
const readline = require('readline-sync');
let calcMessages = require('./calculator_messages.json');
let tryAgain = true;

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (tryAgain) {
prompt(calcMessages.messages.welcome_message);

prompt(calcMessages.messages.first_number);
let number1 = readline.question();

while (invalidNumber(number1)) {
    prompt(calcMessages.messages.invalid_number);
    number1 = readline.question();
}

prompt(calcMessages.messages.second_number);
let number2 = readline.question();

while (invalidNumber(number2)) {
    prompt(calcMessages.messages.invalid_number);
    number2 = readline.question();
}
prompt(calcMessages.messages.operation);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
}
let output;
switch (operation) {
    case '1':
        output = Number(number1) + Number(number2);
        break;
    case '2':
        output = Number(number1) - Number(number2);
        break;
    case '3':
        output = Number(number1) * Number(number2);
        break;
    case '4':
        output = Number(number1) / Number(number2);
        break;
}
console.log(`The result is: ${output}`);
prompt(calcMessages.messages.try_again);
let getAnswer = readline.question();

if (getAnswer.toUpperCase() === 'N') {
    tryAgain = false;
}

}



