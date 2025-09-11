function addTwoNumber(num1,num2){
    console.log(num1+num2);
}

addTwoNumber(2,5);


function loginUser(username){
    if(username===undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}