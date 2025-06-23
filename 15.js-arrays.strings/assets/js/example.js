//find max and min number in array

const numbers = [34, 4, 72, 91, 12, 235, 45, 67, 89];

let MAX = numbers[0]
let MIN = numbers[0]

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > MAX){
    MAX = numbers[i];
  }
}
console.log("MAX:", MAX);

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < MIN){
    MIN = numbers[i];
  }
}

console.log("MIN:", MIN);

// Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
//find all divisors of a number

let num = 15;

for(let i = 1; i<=15; i++){
  if(num % i == 0){
    console.log(i);
  }
}

//find if number is prime or not

let number = 19

let isPrime = true
for(let i = 2; i<number; i++){
  if(number % i == 0){
    isPrime = false
    break
  }
}

if (isPrime === true) {
  console.log(`${number} sadədir`);
}else{
  console.log(`${number} ədədi sadə deyil`);
}



const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
];

// # products arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

let sumOfPrices = products[0].price

for(let i = 1; i<products.length; i++){
  sumOfPrices = sumOfPrices + products[i].price
}

console.log("Sum of prices:", sumOfPrices);
console.log("Average price:", sumOfPrices / products.length);


const fruits = ["alma", "banan", "qarpız", " portağal", "ananas", "nar"];

// array daxilindəki ən uzun sözü tapan alqoritm yazın

let maxLengthELement = fruits[0]

for (let i = 1; i < fruits.length; i++) {
  if(fruits[i].length> maxLengthELement.length){
    maxLengthELement = fruits[i]
  }
}

console.log("Max Length Element:", maxLengthELement);
