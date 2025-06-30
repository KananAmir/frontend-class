

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies


console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[webTechs.length - 1]);


//push, pop, shift, unshift



// webTechs.push("GraphQL");
// webTechs.pop();
// webTechs.shift();
webTechs.unshift("Angular");

console.log(webTechs);


const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

// console.log(numbers.reverse());


const vegetables = ["Tomato", "Onion", "Potato", "Cabbage", "Onion", "Carrot", "Onion"]; // array of strings, vegetables


console.log(vegetables.indexOf("Onion"));
console.log(vegetables.lastIndexOf("Onion"));


console.log(vegetables.at(3)); // Onion
console.log(vegetables.at(-3)); // Cabbage


// console.log(vegetables.slice());
// console.log(vegetables.slice(2));
console.log(vegetables.slice(2, 4));


console.log([1, 2, 3].concat([4, 5])); // [1,2,3,4,5]


let nums = [1, 2]
let nums2 = [3, 4]

console.log([...nums, ...nums2]);


const countries = [
    "Finland",
    "America",
    "Denmark",
    "Sweden",
    "Azerbaijan",
    "Norway",
    "Iceland",
    "Albania",
]; // array of strings, countries

// console.log(countries.toString());

// console.log(countries.join(", "));



// countries.splice(1, 2)
// countries.splice(1, 1, "France");
countries.splice(1, 2, "France", "Turkey");
// countries.splice(1, 0, "France");

console.log(countries);






// forEach


// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

// countries.forEach((item, index, array) => {
//     // console.log("item", item, "index", index);
//     console.log("item", item, "index", index, "array", array);
// })



const n = [1,2,3,4,5]

// const double = []

// for(let i = 0; i< n.length; i++){
//     double.push(n[i] ** 2)
// }

// console.log(double);


// map 

// countries.map((item, index)=>{

// })


// const result = n.map((element)=>{
//     return element ** 2
// })

const result = n.map((element) => element ** 2)


console.log(result);


const olkeler = [
    "Finland",
    "Denmark",
    "Sweden",
    "Azerbaijan",
    "Norway",
    "Iceland",
    "Albania",
];

// result: ["FIN", "DEN", "SWE", "AZE", "NOR", "ISL", "ALB"];

console.log(olkeler.map((country) => country.slice(0, 3).toUpperCase()));


const students = ["Jamil", "Asya", "Gulgun", "Mirza"]


// students.splice(1, 1)
// console.log(students);

const updatedStudents = students.toSpliced(1, 1)


console.log(updatedStudents);
console.log(students);




// sort 

const scores = [34, 85, 93, 75, 97, 46]
// console.log(countries.sort());
// console.log(scores.sort());


// console.log(scores.sort((a, b)=> a-b)); //asc by number value
// console.log(scores.sort((a, b)=> b-a)); //desc by number value

console.log(scores.toSorted((a, b)=> a-b)); //asc by number value
console.log(scores.toSorted((a, b)=> b-a)); //desc by number value


console.log(scores);


console.log(countries.toSorted((a, b)=> a.localeCompare(b))); // asc by string value
console.log(countries.toSorted((a, b)=> b.localeCompare(a))); // desc by string value



// array of objects


const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

const sortedProductsAscByPrice = products.toSorted((a, b) => a.price - b.price)
const sortedProductsDescByPrice = products.toSorted((a, b) => b.price - a.price)

console.log("sortedProductsAscByPrice", sortedProductsAscByPrice);
console.log("sortedProductsDescByPrice", sortedProductsDescByPrice);

const sortedProductsAscByName = products.toSorted((a, b) => a.name.localeCompare(b.name))
const sortedProductsDescByName= products.toSorted((a, b) => b.name.localeCompare(a.name))


console.log("sortedProductsAscByName", sortedProductsAscByName);
console.log("sortedProductsDescByName", sortedProductsDescByName);

const milks = [
  {
    id: 1,
    name: "Azersud",
    price: 5,
    FatPercent: 1.5,
    MadeIn: "Azerbaijan",
  },
  {
    id: 2,
    name: "Palsud",
    price: 4,
    FatPercent: 2,
    MadeIn: "Azerbaijan",
  },
  {
    id: 3,
    name: "Atena",
    price: 2,
    FatPercent: 3,
    MadeIn: "Georgia",
  },
];


//find, filter, findIndex

const ages = [ 22, 43, 18, 98]

console.log(ages.find((q)=>q > 30)); //43
console.log(ages.filter((q)=>q > 30)); // [43, 98]

// console.log(products.find((p)=>p.price > 50));
console.log(products.filter((p)=>p.price > 50));


console.log(products.filter((item)=>item.category.toLowerCase() === "electronics"));


//some vs every


console.log(ages.some((q)=> q>50)) //true
console.log(ages.every((q)=> q>50)) //false