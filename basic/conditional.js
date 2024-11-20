// let color;
// let mode="dark";
// if(mode==="dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// //conditional statement 
// /*
//     1.if
//     2.if-else
//     3.if-else if
// */

// //ternary operator
//     /*
//         conditon ? statement 1(if true):statement 2(if false statement 1);
//     */

//     let a=25;
//     a%2===0? console.log("even"):console.log("odd");

    //write a program of grade 
     
    let score=67;
    let grade;
    if(score>=90&&score<=100){
        grade='A';
    }
    else if(score>=70&&score<90){
        grade='B';
    }
    else if(score>=50&&score<70){
        grade='C';
    }
    else if(score>=30&&score<50){
        grade='D';
    }
    else {
        grade='E';
    }
    console.log("the grade is:",grade);