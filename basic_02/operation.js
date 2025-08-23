//operator is a specific symbol used to perform operations on operands


// 1. arthematic operator
//+,-,*,/,%,**(power)
//example 
let a=5+5;
let b1=6-7;
let c1=4*9;
let d1=5/2;
let e1=3%2;
let f1=3**2

console.table([a1,b1,c1,d1,e1]);


//2.concatenation

let str1="hello";
let str2=" ankit";
let str3=str1+str2;
// console.log(str3);

console.log("hello"+" ankit");


//3.unary operator

/** increment 
 * x++;   ++x;
 * decrement 
 * x--;   --x;
 */

let x=5;
let b=++x;  //pahle increment then use 6
let c=x++;  //pahle use then increment 6 then 7

let d=x--;      //pahle use then decrement 7 then 6
let e=--x;     //pahle decrement then use 5
console.table([b,c,d,e]);


//4.assignment operators
/**
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 * **=
 */

//5.comparison operator  (return true and false)

/**
 * ==       5=='5' true
 * ===  strickly equal to   5==='5'  false
 * !=
 * !==      strickly not equal to
 * >
 * <
 * <=
 * >=
 * 
 */

console.log(5=='5');  //true it convert datatype
console.log(5==='5');   //false  it also check data type


//6.logical operator   (result true and false)
/**
 * &&
 * ||
 * !
 */

//7.Bitwise operator
/**
 * &  And
 * |  Or
 * ~  not
 * <<  left shift
 * >>  right shift
 * >>>  unsighned right shift
 */


//8.ternary operator

//condition ? valueIfTrue : valueIfFalse;

let age=19;
let result=(age>=18) ? "Adult": "young";
console.log(result);
