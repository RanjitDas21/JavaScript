/* Loops :- Loops are used to execute a piece of code again and again.
   
   1. For Loop 
   2. While Loop  
   3. Do-while Loop
   4. For-of Loop
   5. For-in Loop          
*/

//for-of loop

let str = "JavaScript";

for(let val of str) {
    console.log(val);
}

//for-in loop

const student = {
    name: "rahul Kumar",
    roll: 5432,
    cgpa: 8.6,
    ispass: true,
};

for(let key in student) {
    console.log("key =",key,",value =",student[key]);
}

// String :- String is a sequence of characters used to represent text.

//Create String
let str2 = "Apna College";
let str3 ='Apple';
//string length
console.log(str2.length);
//string indices
console.log(str[0],str[1],str[2]);

//Template Literals :- A way to have embedded expressions in strings
let specialString = `This is a template literals`;
console.log(specialString);

const obj = {
    item: "pen",
    price: 20,
};

console.log("The cost of", obj.item, "is", obj.price, "rupees");

//print using template literals
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//String Interpolation :- To create string by doing substitution of placeholders
//ex :- `srting text ${expression} string text`

// Escape characters :- \n -> next line, \t -> tab space

let str4 = "Apna\nCollege";
console.log(str4);

//Escape characters behave like a single character.
console.log(str4.length); //12

//String Methods :- These are built-in functions to manipulate a string.
/*
   1. str.toUpperCase()
   2. str.toLowerCase()
   3.str.trim() -> remove whitespaces

   ** All methods are return a new string. They can not change the original string.
*/

let str5 = "Mango";
console.log(str5.toUpperCase());

let str6 = '  Orange   ';
console.log(str6.trim());
//str.slice(start,end -> not inclusive) // return part of string
console.log(str5.slice(1,4));
/*Concatination :-
  1. str1.concat(str2) -> join str2 with str1
  2. str1 + str2
*/
let str1 = "Apna";
let str12 = "College";
console.log(str1.concat(str12));

// str.replace(searchVal,newVal) -> replace first maching value
// str.replaceAll(searchVal,newval) -> replace all maching value

let name = "Rahul";
console.log(name.replace("R","S"));
console.log(name.replace("hul","m"));

let name2 = "Hello";
console.log(name2.replaceAll("l","p"));

// str.charAt(idx)
console.log(name2.charAt(0));
