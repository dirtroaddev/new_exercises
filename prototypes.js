// let bob = {name: 'Bob', age: 32};

// let studentBob = Object.create(bob);

// studentBob.year = 'senior';

// console.log(studentBob.name);


// let person = {
//     name: 'Bob',
//     age: 30,
//     height: '6 ft',
//   };

// let personKeys = Object.keys(person);
// let personValues = Object.values(person);
// let personObjects = Object.entries(person);
// console.log(personKeys);
// console.log(personValues);
// console.log(personObjects);

// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
//   };

//   let uppercaseKeys = Object.keys(obj).map(elem => elem.toUpperCase());
//   console.log(uppercaseKeys);
//   console.log(obj);

// let myProtoObj = {
//     foo: 1,
//     bar: 2,
//   };

// let myObj = Object.create(myProtoObj);

// let objToCopy = {
//     foo: 1,
//     bar: 2,
//     qux: 3,
//   };

//   function copyObj(obj, arr) {
//     if(!arr) {
//        return obj;
//     }

//     let obj1 = {}
//     for (let key in obj) {
//         if (arr.includes(key)) {
//             obj1[key] = obj[key]
//         }
//     }
//     return obj1;
//   }
  
//   let newObj = copyObj(objToCopy);
//   console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
//   let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
//   console.log(newObj2);       // => { foo: 1, qux: 3 }
  
//   let newObj3 = copyObj(objToCopy, [ 'bar' ]);
//   console.log(newObj3);       // => { bar: 2 }

// let foo = {
//     a: 'hello',
//     b: 'world',
//   };
  
//   let qux = 'hello';
  
//   function bar(argument1, argument2) {
//     argument1.a = 'hi';
//     argument2 = 'hi';
//   }
  
//   bar(foo, qux);
  
  //
//   console.log(foo.a);

//   console.log(qux);

// let obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["example", "mem", null, { xyz: 6 }, 88],
//     qux: [4, 8, 12]
//   };

//   obj['bar'][3]['xyz'] = 606;

//   console.log(obj);

// function foo(bar) {
//     console.log(bar, bar, bar);
// }

// let bar = foo;
  
//   foo("hello"); // should print "hello hello hello"
//   bar("hi");    // should print "hi hi hi"

// function foo(bar) {
//     console.log(bar());
// }
  
// foo(function() { return'Welcome'});    // Should print 'Welcome'
// foo(function() { return 3.1415});    // Should print 3.1415
// foo(function() { return 'hi hi hi'});    // Should print [1, 2, 3]

// variables
// Bar, arg1, arg2, foo, quz, result

// object property names
// Abc, def, ghi, jkl, mno, pqr, 0,1,2,3

// primitive vallues
// hello, 1234, 456,null,NaN, victor, antonia

// objects
// Bar function, qux, the array(inner and outer)