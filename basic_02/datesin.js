let myDate=new Date();
console.log(myDate);  //2025-08-26T09:49:32.316Z

console.log(myDate.toString()); //Tue Aug 26 2025 09:49:32 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());   //Tue Aug 26 2025

console.log(myDate.toLocaleString());  // 8/26/2025, 9:51:56 AM

console.log(typeof myDate);  //object;



let createDate=new Date(2023,1,23);   //yyyy/mm/dd
let createDate_2=new Date(2023,0,23,6,8,19);
console.log(createDate.toDateString());   //month start from 0 in js  //Mon feb 23 2023
console.log(createDate_2.toLocaleString());   // 1/23/2023, 6:08:19 AM


let create_3=new Date("01-14-223");
console.log(create_3.toLocaleDateString());  // 1/14/223 yaha pe date 1 se started


let testDate=create_3.toDateString();
console.log(testDate);

let myTimeStamp= Date.now();

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


//fetching date ,time,day,year,month etc
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

