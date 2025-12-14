// let a = 20;
// const b = 30;
// var c = 40;


if (true) {  
    let a = 20;
    const b = 30;
    var c = 40;
}
//console.log(a);
//console.log(b);
console.log(c);

//global scope
let f = 900;
var e = 400;

if (true) {  // block scope
    let f = 20;
    const d = 30;
    var e = 40;
    console.log("INNER:",f);
    
}
//console.log(f);
//console.log(d);
console.log(e);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


function one() {
    const username = "hitesh"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website);
    two()
}

one()


if (true) {
    const username = "Shradha"
    if (username === "Shradha") {
        const website = " YouTube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++++++++++++++ Interesting ++++++++++++

addOne(5) // true h
function addOne(num) {
    return num + 1
}
console.log(addOne(5))


addTwo(9) // error
const addTwo = function(num) {
    return num + 2
}
//addTwo(8)
//console.log(addTwo(8))
