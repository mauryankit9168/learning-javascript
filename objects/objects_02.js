// const tinderUser=new Object();

const tinderUser={}

tinderUser.id="1234";
tinderUser.name="Ankit";
tinderUser.isLogged=false;

// console.log(tinderUser);


//combine two object

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"d"};

const obj3={obj1,obj2};
// console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'd' } }

// const obj4=Object.assign({},obj1,obj2)   //{} are optional
// console.log(obj4);    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd' }

// const obj5={...obj1,...obj2};
// console.log(obj5);

// console.log(obj4==obj5);    //false


// convert object into array

console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLogged' ]
console.log(Object.values(tinderUser));   //[ '1234', 'Ankit', false ]
console.log(Object.entries(tinderUser));   //[ [ 'id', '1234' ], [ 'name', 'Ankit' ], [ 'isLogged', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged'));   //true  check ki aapke pass value h ya nhi