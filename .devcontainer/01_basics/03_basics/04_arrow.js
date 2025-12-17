//current obj can be accessed via this keyword

const user = {
    username: "Madhu",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Tommy"
user.welcomeMessage()

console.log(this); //{}

//----------------------------------

function chai() {
    let username = "Madhu"
    console.log(this.username); //undefined
}

chai()

//---------------------
const code = function() {
    let username = "Madhu"
    console.log(this.username); //undefined
}

code()

//---------------------------- ARROW function  () => { }
const codes = () => {
    let username = "Madhu"
    console.log(this); //{}
    console.log(this.username); //undefined
}

codes()

//-----------------  imp => in curly braces we need to write return but in parenthesis no need to write return
const addOne = (num1, num2) => {
    return num1 + num2
}

console.log(addOne(6,7)) //13

//----------- Implicit return -------------

//const addTwo = (num1, num2) => num1 + num2  
// OR
//const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username: "Madhu"}) //if u want to return obj then u need to wrap in parenthesis 

//console.log(addTwo(6,7)) //13
