"use strict"; //treat all js code as newer version

//alert (3+3) //we are using nodejs, not browser
console.log(3+3) // code must be readable


// variable is like container which store data at in memory location
   /*
     eg. declaration :let name="tony Stark"
     */
let number=1234
console.log(number);

//DATA TYPES
    /*
        number = 2 to power 53
        bigint
        string 
        boolean= true or false
        null
        undefined
        symbol=unique
    */ 
console.log(typeof "ankit")
console.log(typeof 123)
console.log(typeof true)
console.log(typeof null)
console.log(typeof Symbol())
console.log(typeof undefined)

 //scopes in js
 /* scope is define by {}
  in braces we declared once time of a varible
  but when we move another variable then we again inisilise that variable
   */

  {
    let a=34;
    console.log(a);
  }
  { let a=23;
    console.log(a);
  }

  //object in js
  /*
  const/let object_Name={
        var_1 : "string" ,
        var_2 : number ,
        var_3 : true or false
        }; */
  const student={
    age:20,
    name:"ankit",
    cgpa:8.4,
    isPass:true,
  };
  student["age"]+=1;   //updation in const also allowed
  console.log(student);     //all student detail
  console.log(student["name"]);   //ankit
  console.log(student.age);     //21 after increament
