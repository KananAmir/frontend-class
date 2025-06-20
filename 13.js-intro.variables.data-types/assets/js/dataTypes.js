//data types in js

// primitive data types
// referance (non primitive) data types

// Primitive data types: number, bigint string, boolean, null, undefined, symbol
// Non-primitive data types: object, array, function

let num = 10; //number
let num2 = 10.5; //number
let num3 = 10n; //bigint

let username = "jhon_doe" // string
let isOnline = false //boolean
let user = null //null
// let user; // undefined

user = "elvin"


const student = {
   name: "elvin",
   age: 20,
   isStudent: true,
   universityName: "BEU",
   address: {
    street: "street1",
    city: "Tbilisi",
   },
   hobbies: ["reading", "swimming", "coding"],
   email: "elvin@gmail.com"
}

const scores = [45, 100, 75, 94, 58]
const colors = ["red", "green", "blue", "yellow", "purple"]
const countries = ["azerbaijan", "georgia", "turkey", "iran", "usa"]


function sum(a,b){
    return a + b
}

console.log(typeof username); //string
console.log(typeof isOnline); //boolean
console.log(typeof num); //number


console.log(typeof typeof 44); // string


// camelCase - userName
// PascalCase - UserName
// snake_case - user_name
// kebab-case - user-name

