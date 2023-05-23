// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i += 1) {
//         fact *= i;
//     }
//     return fact;
// }

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    console.log("num=",num);                 
    return num * factorial(num - 1);
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320


// function randomNumberBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   let tries = 0;
//   let result;
  
//   do {
//     result = randomNumberBetween(1, 6);
//     tries += 1;
//   }
//   while (result <= 2);
  
//   console.log('It took ' + String(tries) + ' tries to get a number greater than 2');