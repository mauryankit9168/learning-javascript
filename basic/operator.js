//operator in javascript
/*
    used to perform some operation on data
        1.arithematic operator
            +,-,*,/,%,**,++,--
*/
let a=5;
let b=3;
console.log("a=",a," & b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
a++;
console.log("a=",a)
b--;
console.log("b=",b)
  

/* 2.assignment operator
        =,+=,-=,%=,**=,*=,/=

    3.comparision operator
        ==,===,!=,!==,>,<,<=,>=
        ===,!==  strictly check means also check their data type
*/
   let c=5;
   let d="5";
   console.log(c==d)    //return true
   console.log(c===d)    //return false


/*
    4.logical operator
        &&,||,!
*/
    console.log(!(a>b)) // it return false