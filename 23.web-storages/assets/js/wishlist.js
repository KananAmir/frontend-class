
const wishlist = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [];


const modeBtn = document.querySelector(".mode")

const mode = localStorage.getItem("mode")

if (mode === "dark") {
    document.body.classList.add("dark-mode")
}

const favCardsWrapper = document.querySelector(".products")


function showInfo(){
    if (wishlist.length === 0) {
    document.querySelector(".info").classList.replace("d-none", "d-block")
}

}

showInfo()

modeBtn.addEventListener("click", (e) => {
    if (e.target.textContent === "dark mode") {
        e.target.textContent = "light mode"
        localStorage.setItem("mode", "dark")
        document.body.classList.add("dark-mode")
    } else {
        e.target.textContent = "dark mode"
        localStorage.setItem("mode", "light")
        document.body.classList.remove("dark-mode")
    }
})


function renderCards(productsArray) {
    const cardsWrapper = document.querySelector(".products")
    cardsWrapper.innerHTML = ""

    productsArray.forEach((product) => {
        let isFav = wishlist.find((q) => q.id == product.id)
        const cardWrapper = document.createElement("div")
        cardWrapper.className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
        cardWrapper.innerHTML = `
                <div class="card">
                <div class="image-wrapper">
                    <img src="${product.image}" class="card-img-top" alt="...">
                </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.slice(0, 50)}...</p>
                        <a href="details.html?id=${product.id}" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <i class="fa-solid fa-heart fav" data-id="${product.id}"></i>
                </div>
        `

        cardsWrapper.append(cardWrapper)

    })

    const allFavIcons = document.querySelectorAll(".fav")
    allFavIcons.forEach((icon) => {
        icon.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id")

            const idx = wishlist.findIndex((q) => q.id == id)

            console.log(e.target.parentElement.parentElement.remove());
            

            wishlist.splice(idx, 1)

            localStorage.setItem("wishlist", JSON.stringify(wishlist))
            
            showInfo()

            showWishlistCount()
        })
    })
}


renderCards(wishlist)


function showWishlistCount(){
    const countElement = document.querySelector("nav sup.count")
    const wishlist = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []

    console.log("wishlist", wishlist);
    
    const count = wishlist.length

    console.log("count", count);

    countElement.textContent = count
}

showWishlistCount()