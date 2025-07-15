// promise
// fetch api


// promise states:
// pending
// fullfilled
// rejected

const promise = new Promise((resolve, reject) => {
    let age = 6;
    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
})

// console.log(promise);

// blocks: then, catch, finally
// async await


// promise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finally block executed");
// })

const myPromise = new Promise((resolve, reject) => {
    const students = ["Elvin", "Asya", "Aysel"];
    // students.length = 0

    if (students.length > 0) {
        resolve(students);
    } else {
        reject("No students found");
    }
})

// myPromise.then((res)=>{
//     console.log(res);   
// }).catch((err)=>{
//     console.log(err);
// })

// promise chaning




// myPromise.then((students) => {
//     students.push("Emil");
//     return students;
// })
//     .then((students) => {
//         // students.splice(0, 1)
//         students.shift()
//         return students;
//     })
//     .then((students) => {
//         console.log(students);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// console.log(1);
// console.log(2);


// setTimeout(() => {
//     console.log(3);
// }, 0);



// console.log(4);



// fetch api

// fetch("https://northwind.vercel.app/api/categories").then((response) => {
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch().finally();


// request & response

// fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("Error fetching users:", err);
// })

fetch("https://northwind.vercel.app/api/categories").then((res) => res.json()).then((data) => {
    console.log(data);
}).catch().finally();

fetch("https://northwind.vercel.app/api/suppliers").then((res) => res.json()).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error("Error fetching users:", err);
})

fetch("https://northwind.vercel.app/api/products", {
    method: "GET"
}).then((res) => res.json()).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error("Error fetching users:", err);
})


// CRUD: C: Create, R: Read, U: Update, D: Delete
// http status codes:
// http request methods: GET, POST, PUT, PATCH, DELETE


// url: https://northwind.vercel.app/api/products

// BASE_URL: https://northwind.vercel.app/api/
// endpoints: products, categories, suppliers

