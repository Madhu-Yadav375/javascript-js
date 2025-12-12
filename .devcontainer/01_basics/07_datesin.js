// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
let myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z


// We can use various methods to convert this date into more readable value.
console.log(myDate.toString());

// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM

console.log(typeof myDate); //object

console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z


//let myCreatedDate = new Date(2025, 0, 12)
let myCreatedDate = new Date(2025, 11, 12, 11, 40)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());//Fri Dec 12 2025
console.log(myCreatedDate.toLocaleString());//12/12/2025, 11:40:00 AM
console.log(myCreatedDate.toLocaleDateString());//12/12/2025

let myCreatedDate1 = new Date("2025-12-13")

console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("12-13-2025") //MM-DD-YY

console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1765563517028

// console.log(myCreatedDate1.getTime()); //1765584000000

console.log(Math.floor(Date.now()/1000)); //sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); //+1 becoz it start from 0
console.log(newDate.getDay()); //start from monday

console.log(`${newDate.getDay()} and the time ${newDate.getHours()}`)

newDate.toLocaleString('default',{
    weekday: "long",
    //timeZone : ''
})




