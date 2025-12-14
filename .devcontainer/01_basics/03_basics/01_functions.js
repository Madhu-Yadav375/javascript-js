function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("U");
}

//sayMyName()

// function addTwoNum(num1, num2) { //num1 & num2 => parameter
//     console.log(num1+ num2);
// }

//const res = addTwoNum(6,5) //8
//console.log("Result: ", res); //Result: undefined


function addTwoNum(num1, num2) { //num1 & num2 => parameter
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const res = addTwoNum(5, 6) //5 & 6 => argument

console.log("Result: ", res);

function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please enter an username");
    //     return
    // }  //OR
    if (!username) {
        console.log("Please enter an username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("madhu"));
console.log(loginUserMessage()); //undefined

function calcCartPrice(num1) {
    return num1
}
console.log(calcCartPrice(2));


//rest or spread operator
function calcCartPrice1(val1, val2, ...num1) {
    return num1
}

console.log(calcCartPrice1(200, 400, 500, 700, 900));



const user = {
    username: "madhu",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user) //Username is madhu and price is 299

handleObject({
    username: "tom",
    price: 499
}) //Usernameis tom and price is 499

const myNewArr = [200, 400, 100, 500]

function returnSecondValue(getArr){
    return getArr[2]
}

//console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 600, 800]));
