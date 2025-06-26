// Functions

// function declearation (regular functions)
// function expression (anonimous functions)
// arrow function



// declearation
// function sayHi(){
//     console.log("Hello World!"); 
// }


// function call
// sayHi()


// parameter vs argument

// 3x + y = 17

// x = 3
// y = 8


// function with parameter

// function greet(name){
//     console.log(`Hello, ${name}`);
// }



// greet("Elvin"), //Hello Elvin
// greet("Ravan")
// greet("Jala")
// greet("Sevinc")

// greet() //Hello, undefined


// function with default parameter

// function greet(name = "Jhon"){
//     console.log(`Hello, ${name}`);
// }

// function printFullName (fName, lName){
//     return `${fName} ${lName}`;
// }

function printFullName(fName, lName) {
    let fullname = fName + " " + lName
    return fullname
}


// console.log(printFullName("Mirza", "Sariyev"));
// console.log(printFullName("Elvin", "Shirinov"));

// greet("Elvin")
// greet()


// function sum(a, b){
//     return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(14, 5));


//expression function


//anonimous function
// function (params) {

// }

const greeting = function (username) {
    return `Hello , ${username}`;
}

// console.log((greeting("Jhon Doe")));


// arrow functions

// ()=>{}

const sayHi = (usernamr) => {
    return `Hello , ${usernamr}`;
}

// console.log(sayHi("Kanan Amirov"));


// const square = (n)=>{
//     return n*n
// }

const square = (n = 0) => n * n;
// console.log(square(3)); //9
// console.log(square(8)); //64


// console.log(square()); // 0



// console.log(multiply(3, 4));

// function multiply(a, b) {
//     return a * b;
// }


// console.log(multiply(3, 4)) // Error: Cannot access 'multiply' before initialization

const multiply = (a, b) => {
    return a * b;
}

//undefined

// var x;

// console.log(x); // undefined

// function findSquare(){
//     let x = 5;
//     let y = 4
//     let result = x * y;
// }

// console.log(findSquare()); //undefined


//unlimited arguments

function sum(...args) {
    let sum = args[0];
    for (let i = 1; i < args.length; i++) {
        sum += args[i]
    }

    return sum;
}



console.log(sum(1, 2, 4));
console.log(sum(342, 3423, 234));


function allNums() {
    console.log(arguments);

}


console.log(allNums(1, 2));



// examples:


// write a function to find sum of array elements

const nums = [1, 2, 3, 4]

function sumOfArrayElements(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum;
}


// console.log(sumOfArrayElements(nums)); // 10
// console.log(sumOfArrayElements([5,6,7]) ); // 18
// console.log(sumOfArrayElements([10, 20, 50]) ); // 80


// write a function to find average of array elements
function findAverage(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum / arr.length;
}


// console.log(findAverage(nums)); // 10
// console.log(findAverage([5,6,7]) ); // 18
// console.log(findAverage([10, 20, 50]) ); // 80


//IIFE
// Self Invoking Functions

// (function () {
//     console.log("Hello, World!");
//  })()

(function (name) {
    console.log(`Hello, ${name}`);
 })("Jhon")

//calback function
function callbackFunc (){
    return "I am callback function";
}

//HOF - high order function
function mainFunc (callback) {
    return callback();
}

console.log(mainFunc(callbackFunc));

console.log(mainFunc(function(){
    return "I am CB"
}));

console.log(mainFunc(()=> "I am CB with arrow syntax"));


//global object: window

const student = {
    firstName: "Sevinc",
    lastName: "Seyidova",
    email: "sevinc@gmail.com",
    age: 25,
    address: {
        street: "street 1",
        city: "Baku",
        country: "Azerbaijan",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    calcBirthYear: function () {
        return new Date().getFullYear() - this.age;
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // getFullName: function () {
    //     return `${this.firstName} ${this.lastName}`;
    // },
    // getFullName: () => {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

console.log(student.getFullName());



const user = {
    name: "John",
    age: 30,
    getInfo: ()=>{
        console.log(this);  
    }
}

console.log(user.getInfo());

