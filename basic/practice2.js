//get  the user to input a number using prompt("enter a number:").check if the number is multiple of 5 or not.

let number=prompt("enter a number:");
if(number%5===0){
    console.log(number,"is divisible by 5");
}
else{
    console.log(number,"is not divisible by 5");
}