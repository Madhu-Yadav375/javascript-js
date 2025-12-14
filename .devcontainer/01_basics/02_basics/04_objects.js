const tinderUser = new Object() //singleton obj
const tinderUser1 = {} //non-singleton obj

//console.log(tinderUser); //{}
//console.log(tinderUser1); //{}


tinderUser.id = "123abc"
tinderUser.name = "Tom"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '123abc', name: 'Tom', isLoggedIn: false }

const regularUser = {
    email: "tom123@email.com",
    fullName: {
        userFullName: {
            firstName: "Madhu",
            lastName: "Yadav"
        }
    }
}

// console.log(regularUser.fullName); //{ userFullName: { firstName: 'Madhu', lastName: 'Yadav' } }
// console.log(regularUser.fullName.userFullName); //{ firstName: 'Madhu', lastName: 'Yadav' }


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //{} -> trgt , (obj1, obj2) -> src
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1); //{ '1': 'a', '2': 'b' }

// const obj4 = Object.assign(obj1, obj2) //without {} -> copy in obj1
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//method 2 => spread
const obj6 = {...obj1, ...obj2}
//console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target); //{ a: 1, b: 4, c: 5 }
// console.log(source); //{ b: 4, c: 5 }
// console.log(returnedTarget); //{ a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true


const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //['id', 'name', 'isLoggedIn'] => datatype => array h
console.log(Object.values(tinderUser)); //[ '123abc', 'Tom', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Tom' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


