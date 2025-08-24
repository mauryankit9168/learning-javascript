// const name="ankit"
// const repoCount=5;

// //concatenation
// //console.log(name+ repoCount+"nice")    //this is old 

// console.log(`hello! my name is ${name}, my repoCount is ${repoCount},thank you!`);
//use backticks ans dollar sign

//string declaration

const str=new String("ankitMaurya");

console.log(str[4]);   //access element

console.log(str.__proto__)
console.log(str.length);   //get length
console.log(str.toUpperCase());   //change in uppercase
console.log(str.charAt(7));     //7 pe kon sa hai     
console.log(str.indexOf('t'));  //t kaha h index
console.log(str.substring(3,8));  //0 se lekar 8 tak
console.log(str.slice(-8));   //also we give negative index mean last 8 se chalu karo aur end tak //itMaurya
console.log(str.slice(0,-6));   //means 0 se start aur last se 6 tak //ankit

const str_2="    fireIce   ";
console.log(str_2.trim());    //remove extra white space //fireIce  
console.log(str_2.replace('Ice','ball'));  // remove ice and replace from ball
console.log(str_2.includes('reI'));  // kya ye word h ya nhi string me //true
