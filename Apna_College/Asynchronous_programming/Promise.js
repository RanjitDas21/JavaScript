/* Promise:- Promise is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.

Create a promise:- let promise = new Promise((resolve, reject) => {...})
** resolve & reject are the callbacks provided by JS.

A JavaScript Promise object can be:
      1. Pending: the result is undefined.
      2. Resolved: the result is a value (fulfilled).
      3. Rejected: the result is an error object.
      
*/

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("succesfull");
// })

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             // reject("error");
//         }, 5000)
//     })
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("success");
//         // reject("error");
//     })
// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });

// Promise Chaining

// function asyncFun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 3000);
//     });
// };

// console.log("fetching data1....");
// let p1 = asyncFun1();
// p1.then((res) => {
//     console.log("res");
// });

// function asyncFun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 3000);
//     });
// };

// console.log("fetching data2....");
// let p2 = asyncFun2();
// p2.then((res) => {
//     console.log("res");
// }); 

// Here two data are print after 3sec. But I want each data is print after 3sec.
// To achieve this I need to use Promise Chaining. Here is the code for it.

// function asyncFun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 3000)
//     })
// }

// function asyncFun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 3000)
//     })
// }

// console.log("fetching data1....");
// let p1 = asyncFun1();
// p1.then((res) => {
//     console.log("fetching data2....");
//     let p2 = asyncFun2();
//     p2.then((res) => {});
// });

// Another way
// console.log("fetching data1....");
// asyncFun1().then((res) => {
//     console.log("fetching data2....");
//     asyncFun2().then((res) => {});
// });


function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        }, 2000)
    })
}

// Promise Chaining
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     });
// });

// Another way 

console.log("getting data1....");
getData(1).then((res) => {
    console.log("getting data2....");
    return getData(2);
}).then((res) => {
    console.log("getting data3....");
    return getData(3);
}).then((res) => {
    console.log(res);
});