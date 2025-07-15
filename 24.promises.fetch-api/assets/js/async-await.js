
const BASE_URL = "https://book-store-api-liard-three.vercel.app";


// async await

// function sum (a,b){
//     return a+b
// }

// console.log(sum(2,3)); //5

async function sum(a, b) {
    return a + b;
}

// console.log(sum(2, 3)); // Promise { <pending> }


// sum(2, 3).then((result)=>{
//     console.log(result); // 5
// })

// async function getData(endpoint) {
//     const response = await fetch(`${BASE_URL}/${endpoint}`);
//     if (!response.ok) {
//         throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);    
//     }
//     const data = await response.json();
//     console.log(data);
// }

async function getData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    console.log(data);
}

getData("books")
getData("users")