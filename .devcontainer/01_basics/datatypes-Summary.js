//datatype divide acc^n to how data stored in memory and accessed from memory

// All Primitive datatypes ---> call by value hote h

// 7 -> String, Number, Boolean, null, undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 765423567865434567n //n -> automatically bigInt ban gya


//Reference (Non-Primitive)
//Array, Objects, Functions

const heros = ["Shaktiman", "Ironman", "Doga"]

//object
let myObj = {
    name : "Madhu",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof(bigNumber));//bigint
console.log(typeof id);//symbol
console.log(typeof anotherId);//symbol


console.log(typeof myFunction);//object function
console.log(typeof outsideTemp);//obj
console.log(typeof heros);//obj
console.log(typeof myObj);//obj

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myName = "MadhuYadav"
let anotherName = myName
anotherName = "chaiaurcode"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gogle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "iammadhu@google.com"

console.log(userOne.email);
console.log(userTwo.email);







