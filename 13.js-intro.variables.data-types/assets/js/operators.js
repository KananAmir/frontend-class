// Arithmetic Operators

let num1 = 12;
let num2 = 5;

let sum = num1 + num2
let difference = num1 - num2
let product = num1 * num2
let quotient = num1 / num2
let remainder = num1 % num2
let squareOfNum1 = num1 ** 2


console.log("sum:", sum);
console.log("difference:", difference);
console.log("product:", product);
console.log("quotient:", quotient);
console.log("remainder:", remainder);
console.log("squareOfNum1:", squareOfNum1);


//Assignment operators
let fName = "Kanan";
let lName = "Amirov";

let count = 17
// count = count+1
count += 1

let c = 4

c *= 10

console.log("c:", c);


console.log("Count: ", count);


// JavaScript Comparison Operators


let a = 12
let b = 15

console.log(a > b); //false
console.log(a < b); //true

console.log(a == b); //false
console.log(a != b); //true

console.log("a" == "a"); //true

console.log(8 == "8"); //true

//strict equality operator
console.log(8 === "8");  //false


console.log("a" > "b"); //false
console.log("A" < "a"); //true
console.log("c" > "b"); //true



console.log("---------------------");



//Logical Operators
// && || !

// falthy values: 0, "", '', ``, null, undefined, NaN, false
// truth values: 1, -15, [], {}, true, "0", " ", "false", "true"

console.log(5>3 && 2>1); //true && true --> true
console.log(5>3 && 2<1); // true && false --> false

console.log("salam" && 5>3 && 15); // 15
console.log(3<2 && "salam" && "baku"); // false
console.log(17 && null && 5 && "salam"); //null


console.log("salam" || 5>3 || 15); // "salam"
console.log(3<2 || undefined|| "baku"); // "baku"
console.log(3<2 || undefined|| null); // null
console.log(17 || null || 5 || "salam"); //17


console.log(!true); //false
console.log(!(5>2)); //false
console.log(!(5>7)); //true
console.log(!"salam"); //false



//ternary operator

let exampScore = 65

// exampScore > 50 ? console.log("you passed") : console.log("you failed");

let result = exampScore > 50 ? "you passed" : "you failed";

console.log("RESULT: ", result); // you passed


//template litherals | template string

let firstName = "Emil"
let lastName = "Ibrahimov"
let age = 25

// let info = "My name is " + firstName + " " + lastName + " and I am " + age + " years old";
let info = `My name is ${firstName} ${lastName} and I am ${age} years old`; // template literals

console.log(info);



//Not a Number - NaN



//type conventions