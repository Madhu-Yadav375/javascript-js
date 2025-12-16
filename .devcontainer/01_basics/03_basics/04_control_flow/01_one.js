//if
// const temperature = 41;

// if (temperature < 50) {
//     console.log('temp is less than 50');
// } else {
//     console.log(`temp is greater than 50`);   
// }

// console.log('executed');


const score = 500

if (score > 300) {
    const power = 'fly'
    console.log(`User power, ${power}`);
    
}
//console.log(`User power, ${power}`); //error

//+++++++++++++++++++++++++++++++++ 
const score1 = 500

if (score1 > 300) {
    var power = 'fly'
    console.log(`User power, ${power}`);
    
}
console.log(`User power, ${power}`);

//++++there is no problem becoz (var scope is completely global) => var -> no use is safe


const balance = 1000

//if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isLoggedIn && debitCard) {
    console.log('Allow to buy courses');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}