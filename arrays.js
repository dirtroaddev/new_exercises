// let myArray = [1, 3, 6, 11, 4, 2,
//     4, 9, 17, 16, 0];

// myArray.forEach(element => element % 2 === 0 ? console.log(element) : null);

// let myArray = [
//     [1, 3, 6, 11],
//     [4, 2, 4],
//     [9, 17, 16, 0],
// ];

// myArray.map(elem => elem.filter(elem1 => elem1 % 2 === 0 ? console.log(elem1) : null));


// let myArray = [
//     1, 3, 6, 11,
//     4, 2, 4, 9,
//     17, 16, 0,
//   ];

// let = oddsEvens = myArray.map(elem => elem % 2 === 0 ? "even" : "odd");

// console.log(oddsEvens);

// function findIntegers(arr) {
//     return arr.filter(elem => Number.isInteger(elem) ? elem : null);
// }


// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
// function oddLengths(arr) {
// return arr.filter(elem => elem.length % 2 !== 0).map(elem => elem.length);;
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(arr) {
//     return arr.reduce((accum, elem) => {
//         return accum + (elem * elem)
        
//     }, 0);
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

// function oddLengths(arr) {
//     return arr.reduce((accum, elem) => {
//         if (elem.length % 2 === 1) {
//             accum.push(elem.length);
//         }
//         return accum;
//     }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// numbers1.includes(3);
// numbers2.includes(3);
// numbers3.includes(3);
let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

arr[1][3] = 606;

console.log(arr);