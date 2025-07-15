const addBookForm = document.getElementById('addBookForm');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const stock = document.getElementById('stock');
const coverImageURL = document.getElementById('coverImageURL');

addBookForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    try {
        const newBook = {
            title: title.value,
            price: Number(price.value),
            description: description.value,
            stock: Number(stock.value),
            coverImageURL: coverImageURL.value
        }

       const response =  await fetch("https://book-store-api-liard-three.vercel.app/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
       })

        // if(response.ok) {
        //     // const data = await response.json();
        //     // addBookForm.reset();
        //     e.target.reset();
        // } else {
        //     console.error("Failed to add book:", response.statusText);
        // }

        e.target.reset();
        window.location.href = "index.html"; 
  
    } catch (error) {
        console.log(error);
    }
})