//conditions



let age = 16

// if/else statement

// if (age >=18) {
//     console.log("You can vote!");
// }

// if (age >=18) {
//     console.log("You can vote!");
// }else{
//     console.log("You can't vote yet!");
// }



let ticketPrice = 8

const user = {
    name: "John",
    age: 15,
    balance: 16
}

if (user.age >= 18) {
    if (user.balance >= ticketPrice) {
        console.log(`${user.name} can buy a ticket, he has enough money`);
    } else {
        console.log(`${user.name} can't buy a ticket, not enough balance`);
    }
} else {
    console.log(`${user.name} can't buy a ticket, u are under 18`);
}


if (user.age >= 18 && user.balance >= ticketPrice) {
    console.log(`${user.name} can buy a ticket, he has enough money`);
} else {
    console.log(`${user.name} can't buy a ticket`);
}


let a = 3
let b = 5
let c = 4

if (a > b && a > c) {
    console.log(a + " is the biggest number");
} else if (b > a && b > c) {
    console.log(b + " is the biggest number");
} else {
    console.log(c + " is the biggest number");
}


// let number = -3
let number = "hello"

// if(number < 0){
//     console.log(`${number} is negative`);
// }else if(number > 0){
//     console.log(`${number} is positive`);
// }else{
//     console.log(`${number} is zero`);
// }
if (number < 0) {
    console.log(`${number} is negative`);
} else if (number > 0) {
    console.log(`${number} is positive`);
} else if (number === 0) {
    console.log(`${number} is zero`);
} else {
    console.log(`${number} is not a number`);
}


//switch case

let day = window.prompt("Enter a day of the week");

switch (Number(day)) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 5:
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid day value!");
        break;
}


const month = "september"

switch (month) {
    case "march":
    case "april":
    case "may":
        console.log("Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Summer");
        break;
    case "september":
    case "october":
    case "november":
        console.log("Autumn");
        break;
    case "december":
    case "january":
    case "february":
        console.log("Winter");


    default:
        break;
}


//loops