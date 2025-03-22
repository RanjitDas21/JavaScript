let myName = "ranjit     "

// console.log(myName.trueLength);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

myName.trueLength();
'iceTea'.trueLength();

let heros = ["ironman", "spiderman"]

let heroPower = {
    ironman: "nano-armer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ranjit = function(){
    console.log(`ranjit is present in all objects`);
}

Array.prototype.heyRanjit = function(){
    console.log(`Ranjit says hello`);
}

heroPower.ranjit();
heros.ranjit();
heros.heyRanjit();
// heroPower.heyRanjit();

// Inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaileble: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);