const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10)
//console.log(newNums);

const newNum = []
myNums.forEach( (num) => {
    newNum.push(num+10)
})
//console.log(newNum);


//chaining
const newNumbers = myNums
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num > 40)
console.log(newNumbers);



// ✔️ map():

// naya array return karta hai
// Original array ko change nahi karta
// Transformation ke liye best

//✔️ forEach():

// kuch return nahi karta
// Manual array banana padta hai
// Side-effects (push, console, API call) ke liye use hota hai