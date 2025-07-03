// DOM - document object model
// BOM - browser object model


// window object is global object


// console.log(window);
// console.log(this);



// console.log(window.location);

// popup alerts

// alert
// confirm
// prompt

// window.alert("hello world!")

// let isConfirmed = window.confirm("are u sure to delete?")

// console.log("isConfirmed", isConfirmed);



// window.prompt("Enter ur name here..")
// let username = window.prompt("Enter ur name here..", "Kanan Amirov")

// console.log(username);


// let firstNumber = parseInt(window.prompt("enter first number"))
// let secondNumber = parseInt(window.prompt("enter second number"))
// let operation = window.prompt("enter operation, +, -, *, /")

// let result;

// switch (operation) {
//     case "+":
//         result = firstNumber + secondNumber
//         break;
//     case "-":
//         result = firstNumber - secondNumber
//         break;
//     case "*":
//        result = firstNumber * secondNumber
//         break;
//     case "/":
//        result = firstNumber / secondNumber
//         break;
 
//     default:
//         window.alert("invalid operation")
//         break;
// }


// if(operation === "+" || operation === "-" || operation === "*" || operation === "/"){
//     window.alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`)
// }

// if(["+", "-", "*", "/"].includes(operation)){
//     window.alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`)
// }



// timing functions

// setTimeout

// const timeout = window.setTimeout(()=>{
//     console.log("hello frontend devs!");
// }, 3000)


const clearBtn = document.querySelector(".clear")


clearBtn.addEventListener("click", ()=>{
    // clearTimeout(timeout)
    clearInterval(interval)
})


//setInterval

let counter = 0
const interval = window.setInterval(()=>{
    // console.log("hello");
    counter += 1
    console.log(counter)
}, 10)