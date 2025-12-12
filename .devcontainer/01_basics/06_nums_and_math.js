const score = 400
console.log(score);


const balance = new Number(300)
console.log(balance);

console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8996
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(8.6));
console.log(Math.ceil(4.3));//top value
console.log(Math.floor(4.9));//low value

console.log(Math.min(4,45,34,23,6,2));
console.log(Math.max(4,35,76,54));

console.log(Math.random());//Range => 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));





