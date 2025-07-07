

// const cardWrapper = document.querySelector(".card-wrapper")



// const card = document.createElement("div")
// card.style.width = "18rem"
// card.style.border = "1px solid"
// card.style.padding = "1rem"
// card.style.textAlign = "center"
// card.style.borderRadius = "8px"

// const img = document.createElement("img")
// img.setAttribute("src", "https://www.shutterstock.com/image-vector/spiderman-suit-icon-logo-super-600w-2407844867.jpg")
// img.setAttribute("class", "card-img-top")
// img.setAttribute("alt", "card photo")
// const cardBody = document.createElement("div")

// const cardTitle = document.createElement("h5")
// cardTitle.textContent = "Spiderman"
// cardTitle.setAttribute("class", "card-title")

// const cardText = document.createElement("p")
// cardText.textContent = "Spider-Man is a superhero in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books"
// cardText.setAttribute("class", "card-text")

// const cardLink = document.createElement("a")
// cardLink.textContent = "More Info"
// cardLink.setAttribute("href", "https://www.shutterstock.com/search/spider-man")
// cardLink.setAttribute("class", "btn btn-primary")
// cardLink.setAttribute("target", "_blank")



// cardBody.append(cardTitle, cardText, cardLink)
// card.append(img, cardBody)
// cardWrapper.append(card)


// const emailInput = document.querySelector(".email")


// console.log(emailInput.getAttribute("id"));
// console.log(emailInput.getAttribute("type"));
// console.log(emailInput.getAttribute("data-test"));


// console.log(emailInput.hasAttribute("required"));
// console.log(emailInput.hasAttribute("placeholder"));


const addBtn = document.querySelector(".add-btn")
const list = document.querySelector(".list")
const note = document.querySelector(".note")
const errorMessage = document.querySelector(".error-message")


addBtn.addEventListener("click", (e) => {
    if (note.value.trim() === "") {
        // alert("Please enter a note")
        errorMessage.style.display = "block"
        return
    }

    const listItem = document.createElement("li")
    listItem.textContent = note.value.toLowerCase()

    list.append(listItem)
    note.value = ""
    errorMessage.style.display = "none"

})


// className vs classList

// errorMessage.className = "bg-danger"

// console.log(errorMessage.className);


const add = document.querySelector(".add")
const remove = document.querySelector(".remove")
const toggle = document.querySelector(".toggle")

add.addEventListener("click", ()=>{
    document.body.classList.add("bg-warning")
})

add.addEventListener("click", ()=>{
    console.log("add btn clicked!");
})

remove.addEventListener("click", ()=>{
    document.body.classList.remove("bg-warning")
})
toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("bg-warning")
})


// add.onclick = ()=>{
//     console.log("add btn clicked");
// }

// add.onclick = ()=>{
//     document.body.classList.add("bg-warning")
// }

// remove.onclick = ()=>{
//     document.body.classList.remove("bg-warning")
// }

// toggle.onclick = ()=>{
//     document.body.classList.toggle("bg-warning")
// }



console.log(document.body.classList.contains("bg-primary"));



