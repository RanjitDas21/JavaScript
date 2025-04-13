// // Create a Promise
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task - DB calls, cryptography,network call
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve();
//     }, 1000)
// })

// // Consume the Promise
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// // Another way to create and consume a Promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('Async task2 resolved');
// })

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseTwo.then(function(user){
    console.log(user);
})

// Chainning
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "ranjit", password: "12345678"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)    
})

promiseThree.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// Promise consume using async await
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "javascript", password: "1234"})
        } else {
            reject("ERROR: Js went wrong")
        }
    }, 1000)
})

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// Using then and catch
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})