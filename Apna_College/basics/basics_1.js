console.log("Hello world!");
console.log("I Love JavaScript");

//Variables
let name = "Tony Stark";
console.log(name);
let age = 20;
console.log(age);
let prize = 93.5;
console.log(prize);

const pi = 3.14;
console.log(pi); 

let a;
console.log(a); //undefined

//Scope
{
    let b = 5;
    console.log(b);
}

/* Data Types
  1.Primitive Data Type :-
    Number,String,Boolean,Undefined,Null,BigInt,Symbol.
  2. Non-primitive Data Type :-
    Objects(Array,Function)  
   
*/
console.log(typeof name);
console.log(typeof age);
console.log(typeof a);
let x = null;
console.log(typeof x); //Object

let isFollow = true;
console.log(typeof isFollow);

let p = BigInt("1234");
console.log(typeof p);
console.log(p);
let q = Symbol("Hello!");
console.log(typeof q);
console.log(q);

//Objects

const student = {
  fullName: "Rahul Kumar",
  age: 20,
  cgpa: 8.5,
  isPass: true,
};

console.log(student);
console.log(student.age);
console.log(student["age"]);
console.log(student.fullName);
console.log(typeof student);
console.log(typeof student.isPass);

