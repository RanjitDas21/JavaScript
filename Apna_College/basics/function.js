// Function :- Block of code that perform a specific task, can be invoked whenever needed
// Function reduce REDUNDANCY(repetation) in code.
// Function Definition :-
    function functionName() {
        // do som e work
    }

// function -> 2 numbers sum 
function sum(x,y) {
    // x & y -> Local variables(Block scope)
    s = x+y;
    return s;
}

let ans = sum(8,6);
console.log(`The sum of two number is ${ans}`);

// Arrow Function :- Compact way of writing a function
// sum function
let Sum = (a,b) => {
    console.log(a+b); 
}  

Sum(4,5);

// forEach Loop in array
// arr.forEach(callBackFunction)
// A callback is a function passed as an argument to another function. 
let arr = [4,2,9,5,1,8,3,7];

arr.forEach(function printVal(val) {
    console.log(val);
}); 

let arr2 = ["pune","delhi","mumbai","kolkata"];
//Using arrow function
arr2.forEach((val) => {
    console.log(val);
});

arr2.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});

/* Higher Order Function/Method :-
        Higher order functions are javaScript method that
        either take another function as a parameter inside them
        or they return another function as their output.
*/

//For a given array of numbers,print the squre of each value using forEach loop.

let nums = [5,8,1,7,3,9,2];

let calcSquare = (num) => {
    console.log(num*num);
};

nums.forEach(calcSquare);

/* Some More Array Methods 
  1. Map :- Create a new array with the result of some operation.
            The value its callback returns are used to form new Array.
    
    arr.map(callbackFnx(value,index,array))        
*/
// print array element
let num = [7,3,9,4,2,6,8,6];
num.map((val) => {
    console.log(val);
});
// copy the array
let newArr = num.map((val) => {
    return val;
});
console.log(newArr);
/* 
  2. Filter :- Create a new array of elements that give true for a condition/filter.
*/     
//Ex:- all even elements
let evenArr = num.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

// 3. Reduce :- Performs some operations & reduces the array to a single value.
//               It returns that single value.
let array = [1,2,5,3,4];

let result = array.reduce((prev,curr) => {
    return prev + curr;
});
console.log(result);
// find maximum number
let answer = array.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})
console.log(answer);

