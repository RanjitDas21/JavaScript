// Callback:- A callback is a function passed as an argument to another function.

function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(2, 5, sum);

// Another way
function calculator2(a, b, sumCallback2){
    sumCallback2(a, b);
}

calculator2(3, 2, (a, b) => {
    console.log("The summation is :", a + b);
});

// Asynchronous Callback

const hello = () => {
    console.log("hello world");
};

setTimeout(hello, 1000);

/* Callback Hell:- Nested callbacks stacked below one another forming a pyramid structure.
This style of programming becomes difficult to understand and manage. */

function getData(dataId, getNextdata){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextdata){
            getNextdata();
        }
    }, 2000)
}

//Callback Hell
getData(1, () => {
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, () => {
            console.log("getting data4 ....");
            getData(4, () => {
                console.log("getting data5 ....");
                getData(5);
            });
        });
    });
});