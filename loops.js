// let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// let upperNames = [];

// let index = 0;

// while (index < names.length) {
//     let upperCaseName = names[index].toUpperCase();
//     upperNames.push(upperCaseName);
//     index += 1;
// }

// console.log(upperNames);

function doubler(number) {
    console.log(number);

    if (number <= 50) {
        doubler(number * 2);
    }
}

doubler(5);
