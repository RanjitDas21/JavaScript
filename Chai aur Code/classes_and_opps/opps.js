// Object Literal
const user = {
    username: "ranjit",
    loginCount: 5,
    isSignedIn: true,

    getUserDetails: function() {
        // console.log(`Username: ${this.username}`);
        // console.log("Got user details from database");
        console.log(this);
    }
}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this); 

// Understanding importance of "new" keyword
// ** "new" keyword create a new empty object(new instance).
// For new keyword a constractor function called. 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.gretting = function() {
        console.log(`Welcome ${this.username}`);
    }

    //return this
}

const userOne = new User("ranjit", 3, true);
const userTwo = new User("chai", 5, false);
console.log(userOne.gretting());
console.log(userTwo.constructor);
