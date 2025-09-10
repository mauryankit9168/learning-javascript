//a Singleton 
// is a design pattern where you create only one instance of a class/object, and you reuse that same instance everywhere in your code.

//object literals


const mySym=Symbol("key1");
const student={
    name:"Ankit",
    "full name":"Ankit Maurya",
    mySym:"key1",   //type string
    [mySym]:"key1",   //type symbol
    age:21,
    location:"gzb",
    email: "ankit1408@gmail.com",
    isLoged:false,
    lastLogged:["monday","saturday"]
}

// //access method
// console.log(student.email);    
// console.log(student["location"]);
// console.log(student["full name"]);   //full name is string so it is not access by dot 

// // overwrite and change value
// student.email="name1408@gmail.com"
// Object.freeze(student);   //it lock the original value hene value are not change furture

student.greeting=function(){
    console.log("hello js user");
}
console.log(student.greeting());

student.greeting2=function(){
    console.log(`hello,${this.name}`);    
}
console.log(student.greeting2());