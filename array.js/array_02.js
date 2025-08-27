let marvel=["spiderMan","hulk","captainAmerica"];
let villain=["vulture","abomination","red skull"];

// marvel.push(villain);
// console.log(marvel);    /***[
//                           'spiderMan',
//                           'hulk',
//                           'captainAmerica',
//                           [ 'vulture', 'abomination', 'red skull' ]
//                         ] */

//here we see it push array in array

// const all=marvel.concat(villain);
// console.log(all);                   
/**
[
  'spiderMan',
  'hulk',
  'captainAmerica',
  'vulture',
  'abomination',
  'red skull'
] */

// let all_heroes=[...marvel,...villain];  //known as spread method
// console.log(all_heroes);
/**
[
  'spiderMan',
  'hulk',
  'captainAmerica',
  'vulture',
  'abomination',
  'red skull'
] */



let arr=[1,2,3,[4,5,6],[[4,5,8,[1,3]]]];
const real_array=arr.flat(Infinity);
console.log(real_array);   //[1, 2, 3, 4, 5, 6, 4, 5, 8, 1, 3]

console.log(Array.isArray("hello"));   //check the the given value is array or not
console.log(Array.from("hello"));       //[ 'h', 'e', 'l', 'l', 'o' ]
 

let a=100;
let b=200;
let c=300;
console.log([a,b,c])     //[ 100, 200, 300 ]

