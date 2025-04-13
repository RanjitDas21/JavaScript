// The Fetch API provides an interface for fetching (sending/receiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resource(data).
// let promise = fetch(url,[options])

const URL = "https://jsonplaceholder.typicode.com/users";

const btn = document.querySelector("#btn");
const user = document.querySelector("#user");

// let promise = fetch(URL);
// console.log(promise);

// const getUsers = async () => {
//     console.log("gatting data....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     console.log(data[0]);
//     user.innerText = data[0].name;
// };

// using promise Chain

function getUsers() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        user.innerText = data[1].name;
    })
}

btn.addEventListener("click", getUsers);