
// console.log(window.localStorage);

// localStorage.setItem("tech", "javascript");
// localStorage.setItem("id", "112");
const addBtn = document.querySelector(".add")
const removeBtn = document.querySelector(".remove")
const emptyBtn = document.querySelector(".empty")
const getBtn = document.querySelector(".get")


addBtn.addEventListener("click", () => {
    localStorage.setItem("user", "kanan")
})

removeBtn.addEventListener("click", () => {
    localStorage.removeItem("user")
})

emptyBtn.addEventListener("click", () => {
    localStorage.clear()
})

getBtn.addEventListener("click", () => {
    window.alert(localStorage.getItem("user"))
})


// localStorage.setItem("numberValue", 10)
// localStorage.setItem("username", "jhon_doe")
// localStorage.setItem("isOnline", true)
// localStorage.setItem("scores", [4,5,3,8,9])

console.log(typeof localStorage.getItem("isOnline"));
console.log(localStorage.getItem("scores"));

const category = {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments"
}
localStorage.setItem("category", category)

//JSON stringify vs JSON parse



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


localStorage.setItem("products", JSON.stringify(products))


console.log(localStorage.getItem("products"));
console.log(JSON.parse(localStorage.getItem("products")));



// sessionStorage.setItem("hello", "salam aleykum")
// localStorage.setItem("hello", "salam aleykum")