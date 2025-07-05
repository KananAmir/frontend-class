// DOM - document object model


console.log(this); // gloabal object - window

// console.log(window.document);


// console.log(document.head);
// console.log(document.body);


// const user = {
//     name: 'John',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         },
//     getInfo: function() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }
// console.log(user.getInfo());

//selectors

const headingElement = document.getElementById("heading")
const paragElements = document.getElementsByClassName("text")  // returns HTMLCollection
const allParags = document.getElementsByTagName("p") // returns HTMLCollection
const usernameInput = document.getElementsByName("username") // returns NodeList
const genderInputs = document.getElementsByName("gender")
// console.log(headingElement);
// console.log(headingElement.textContent);
// headingElement.style.color = "gold"

console.log(paragElements); //HTML collection

console.log(allParags);

console.log(usernameInput);
console.log(genderInputs);


const parag = document.querySelector(".text")
const parags = document.querySelectorAll(".text") // returns NodeList


console.log(parag);
console.log(parags);


// HTML collection vs NodeList


const pElem = document.querySelector(".inner .text")
const innerDiv = document.querySelector(".inner")
// console.log(pElem.parentElement);
// console.log(pElem.parentElement.parentElement);
console.log(pElem.nextElementSibling);
// console.log(pElem.nextSibling);

// console.log(innerDiv.children);
// console.log(innerDiv.childNodes);



const text = document.createElement("p")

text.textContent = "Hello World!"


console.log(text);

const textWrapper = document.querySelector(".text-wrapper")


//append, appendChild, prepend

// textWrapper.appendChild(text)
// textWrapper.append(text)

textWrapper.prepend(text)
// textContent, innerText, innerHTML

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


const productList = document.querySelector(".product-list")


products.forEach((product)=>{
    const liElem = document.createElement("li")
    liElem.textContent = product.title

    // console.log(liElem);

    liElem.addEventListener("click", (event)=>{
        // console.log(this); // window
        event.target.remove()
    })

    // liElem.addEventListener("click", function(){
    //     // console.log(this);
    //     this.remove()
    // })

    productList.append(liElem)
})



const paragElem = document.querySelector(".parag");

console.log(paragElem.textContent);
// console.log(paragElem.innerText);
console.log(paragElem.innerHTML);


const techList = document.querySelector(".tech-list");

// techList.textContent = `
//         <li>html</li>
//         <li>css</li>
//         <li>javascript</li>
// `
techList.innerHTML = `
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
`


const deleteElementBtn = document.querySelector(".delete")

deleteElementBtn.addEventListener("click", ()=>{
    // alert("test")
    // techList.remove()
})



const box = document.createElement("div");

box.style.width = "100px"
box.style.height = "100px"
box.style.backgroundColor = "red"
box.style.borderRadius = "50%"
box.style.display = "flex"
box.style.justifyContent = "center"
box.style.alignItems = "center"


console.log(box.style);

document.body.append(box)

const sampleText = document.createElement("span")

sampleText.textContent = "Frontend"
sampleText.style.color = "white"


box.appendChild(sampleText)

