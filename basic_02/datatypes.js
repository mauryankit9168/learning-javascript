"use strict";
// alert(3+3); // use in browser console



let a="ankit";
let age1=21;
let isLogged=false;


//1.primitive datatype

// number =>2 to power 53
// bigint
// string
// boolean =>true/false
// null =>standlone value
// undefined => 
// symbol

let num=123;
let str="string value";
let flag=true;
let null_val=null;
let und;
let array=[1,2,3];
let sym=Symbol("123");

console.log(typeof num);  //number
console.log(typeof str);  //string
console.log(typeof flag);   //boolean
console.log(typeof null_val);  //object
console.log(typeof und);   //undefined
console.log(typeof array);  //object
console.log(typeof null);   //object
console.log(typeof undefined);   //undefined


//2.reference (Non primitive )
//array,object,function

const heroes=["hulk","black panther","spiderman"];


//object
let myObject={
    name2:"kasturi",
    age2:18,
}

let myfunction=function(){
    console.log("hello javascript");
}


