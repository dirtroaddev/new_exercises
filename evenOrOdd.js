// function evenOrOdd(num) {
//     if (!Number.isInteger(num)) {  
//         console.log('Sorry, you have not entered a number.');
//         return;   
//     }
//     if (num % 2 === 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
// } 

// console.log(evenOrOdd('tree'));



// if (foo()) {
//     return 'bar';
// } else {
//     return quz();
// }

// function changeString(str) {
//     if (str.length > 10) {
//         return str.toUpperCase();
//     } else {
//         return str;
//     }
    
// }

function numberRange(num) {
    if (num >= 0 && num <= 50) {
        return `${num} is between 0 and 50`;
    } else if (num > 50 && num < 100) {
        return `${num} is between 51 and 100`;
    } else if (num > 100) {
        return `${num} is greater than 100`;
    } else {
        return `${num} is less than 0`;
    }
}

console.log(numberRange(25));
numberRange(75);
numberRange(125);
numberRange(-25);