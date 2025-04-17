// Array :- Collection of item.

let heroes = ["ironman","hulk","thor","spyderman"];
let marks = [85,70,90,93,89,95];
let info = ["rahul",86,"Delhi"];

console.log(marks.length); // 6
console.log(typeof marks); // object

//Array indices
console.log(marks[4]); // 89
console.log(marks[6]); //undefined
// update the value
marks[4] = 65;
console.log(marks);
console.log(marks[4]); // 65

// Looping over an Array 
for(let mark of marks) {
    console.log(mark);
}

// Array Methods
// 1. push() -> add to end -> change the original Array.
let foodItems = ["apple","mango","potato"];
foodItems.push("litchi");
console.log(foodItems);
foodItems.push("chips","burger");
console.log(foodItems);

// 2. pop() -> delete from end and return -> change the original Array
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("Deleted item is",deletedItem);

// 3. toString() -> convert array to string
console.log(foodItems.toString());
console.log(foodItems);

// 4. concat() -> joins multiple Arrays & returns result   
let ages1 =[34,45,23,20];
let ages2 = [50,55,41];
let ages = ages1.concat(ages2);
console.log(ages);
// concat multiple Arrays
let ages3 = [75,80,65,62];
let age = ages1.concat(ages2,ages3);
console.log(age);

// 5. unshift() -> add to start
let marvelHeroes = ["thor","spiderman","ironman","Dr. Strange"];
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

// 6. shift() -> delete from start and return
let val = marvelHeroes.shift();
console.log("deleted value is",val);
console.log(marvelHeroes);

// 7. slice(startIdx,endIdx) -> returns a piece of the Array -> can not change original Array
console.log(marvelHeroes.slice(1,3));

// 8. splice() -> change ariginal Array(add,remove,replace) 
//  splice(startIdx,delCount,newEle1,...)
let arr = [5,7,2,4,3,9,6,12];
arr.splice(3,2,20,25);
console.log(arr); 
// add element
arr.splice(6,0,30);
console.log(arr);
// delete element
arr.splice(1,1);
console.log(arr);
//replace element
arr.splice(2,1,50);
console.log(arr);

//special case
let newArr = arr.splice(4); //-> delete all element from idx 4 and return a array with deleted item.
console.log(newArr);
console.log(arr); // change the original array

// Array Spread
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);
