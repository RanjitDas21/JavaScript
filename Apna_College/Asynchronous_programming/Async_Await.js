/* Asunc function always returns a Promise.
  
   async function myFunction(){...}
   
   ** await pauses the execution of its surrounding async functions until the promise is settled.
*/ 

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 3000);
    });
};

async function getWeathetData(){
    await api();
    await api();
}

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        }, 2000)
    })
}

//async-await
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);

}

// IIFE(Immediately Invoked Function Expression):- It is function that is called immediately as soon as it is defined.

(async function getAllData(){   
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);  
    console.log("getting data3....");
    await getData(3);
})();
