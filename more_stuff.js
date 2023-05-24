// console.log(Math.sqrt(37));

// function largest(arr) {
//     return arr.sort((first, sec) => sec - first )[0];
// }

// console.log(largest([1, 102,  6, 3, 2, 56, 7]));

// console.log(Math.max(1, 6, 3, 2));

// function allMatches(arr, regEx) {

//     return arr.filter(elem => regEx.test(elem) ? elem : null);
    
// }


// let words = [
//     'laboratory',
//     'experiment',
//     'flab',
//     'Pans Labyrinth',
//     'elaborate',
//     'polar bear',
//   ];
  
//   console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function isNotANumber(value) {
    let arr = [NaN]
    

    return arr.includes(value);
}

console.log(isNotANumber(NaN));