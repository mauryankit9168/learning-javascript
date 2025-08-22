console.log("hello");


const accountId=130;  //not change
// accountId="234"   give error
let email="1234@2";
var accountPassword="12345";  //not use due to block and functional scope 
accountCity="jaipur";   //not use
var accountPassword="123";

let accountState;   //undefined data type

console.log(email);
console.log(accountId);

console.log(accountPassword);
console.table([accountId,email,accountPassword,accountCity,accountState])

