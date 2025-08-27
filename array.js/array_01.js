
//array declaration

const arr=[1,2,3,4,5];   
 //or 
 //const new_arr=new Array(1,2,3,4,5)

// let arrsize=arr;
// console.log(arrsize); //[ 1, 2, 3, 4, 5]


// let newArr=arr.push("banana","apple");
// console.log(newArr);  //it return length of newArr //7
// console.log(arr);    //[ 1, 2, 3, 4, 5, 'banana', 'apple' ]
// console.log(arr.pop());   //5 is pop now from arr

// console.log(arr.length);   // 7


// arr.unshift(9);       //unshift used to shift all vale and it insert at front
// console.log(arr);     //[ 9, 1, 2, 3, 4, 5 ]

// arr.shift();   //it remove from front and shift forward
// console.log(arr);   //[ 2, 3, 4, 5 ]


// console.log(arr.includes(8))    //it tell the value exist in arr or not
// console.log(arr.indexOf(3));    //tell the index if the value is not exist in arr the it give -1

// const arrAy=arr.join();
// console.log(arrAy);   //it give string value  //1,2,3,4,5
// console.log(arr);     //[ 1, 2, 3, 4, 5 ]



//slice and splice    they work on index

console.log("A",arr);       // A [ 1, 2, 3, 4, 5 ]
const mn1=arr.slice(1,3);  //give the value which present in between 1 to 3 index element but 1 include and 3 is not include
console.log(mn1);           // [ 2, 3 ]
console.log("A",arr);       // A [ 1, 2, 3, 4, 5 ]


console.log("B",arr);           //B [ 1, 2, 3, 4, 5 ]
const mn2=arr.splice(1,3);     //give the value which present in between 1 to 3 index element but 1 include and 3 is include
console.log(mn2);               //[ 2, 3 ,4]
console.log("B",arr);           //B [ 1, 5 ]    

//slice doesnot affect original arr
//splice affect original arr
