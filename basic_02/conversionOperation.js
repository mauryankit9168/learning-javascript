// // covert one data type into other

let score ="44";
console.log(typeof score); //string
console.log(typeof (score)); //string

let value=Number(score);  //Number N is in caps
console.log(typeof value);

let score2="123abs"; //"abs" or "sfd345" give NaN(not a number)
let value2=Number(score2);
console.log(value2);     //NaN
console.log(typeof value2);    //Number

// score =null;   it give 0 and number dt
// score =undefined it give NaN and number dt
// score=true/false it give 1/0
// score="nice"  it give NaN

let flag=" "; 
let booleanVal=Boolean(flag);
console.log(booleanVal);  //true
console.log(typeof booleanVal); //boolean


//null,undefined,"",0  give you false
//else true
//"    " space in " " give true 


let num={name:"ank"}; //[object ,object]
let strVal=String(num);
console.log(strVal);  //true
console.log(typeof strVal); //boolean

// all value convert into string
