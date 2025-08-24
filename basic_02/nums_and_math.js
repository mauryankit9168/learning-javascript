const num=400;  // implicit declarattion
const nums=new Number(300);  //number declaration explicitly    //write on inspect console and get prototype

console.log(nums.toString().length);   //first num convert into string then use string prototypes //3
console.log(nums.toFixed(2)); //convet at 2 decimal place //300.00

const numb=123.8234;
console.log(numb.toPrecision(3))  //precisise the value //at 4 =123.8 //at 3 =124 //at 2 =1.2e+2

const hund=8905423;
console.log(hund.toLocaleString());   //convert readable form with commas // 8,905,423  //convert into string type
console.log(hund.toLocaleString('en-IN'));    //convert readable form with commas in indian number // 89,05,423  //convert into string type

/**open console on inspet
 * write Number.
 * you found many thing such as
 * MAX_VALUE,MIN_VALUE,isInteger,isFinite etc
 */




/********************************************************************** Maths ************************************************************************* */

console.log(Math);    //write on inspect and find protype

console.log(Math.abs(-4));  //for absolute value  //4
console.log(Math.round(4.3));  //round off value //4
console.log(Math.ceil(4.2));  // upar ki value //5
console.log(Math.floor(4.9));  // niche ki value //4
console.log(Math.min(4,5,6,2,9,3));  // min value
console.log(Math.max(4,6,9,1,2));  // max value


console.log(Math.random());  // give random value between 0 and 1
console.log((Math.random()*10)+1);  // 10 se multiply then +1
console.log(Math.floor(Math.random()*10)+1);  // return floor value

const min=10;
const max=23;
console.log(Math.floor(Math.random()*(max-min+1))+min);  // 






