const id = new URLSearchParams(window.location.search).get("id")

// console.log(id);


const addBookForm = document.getElementById('addBookForm');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const stock = document.getElementById('stock');
const coverImageURL = document.getElementById('coverImageURL');

addBookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const newBook = {
            title: title.value,
            price: Number(price.value),
            description: description.value,
            stock: Number(stock.value),
            coverImageURL: coverImageURL.value
        }

        const confirmation = isValidateForm()

        if (!confirmation) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You should fill all fileds!",
            });
            return;
        }
        const response = await fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })


        Toastify({
            text: "Book edited successfully!",
            duration: 2000,
            //   destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

        e.target.reset();

       setTimeout(() => {
         window.location.href = "index.html";
       }, 2000);

    } catch (error) {
        console.log(error);
    }
})


function isValidateForm() {
    if (title.value.trim() === "" ||
        price.value.trim() === "" ||
        description.value.trim() === "" ||
        stock.value.trim() === "" ||
        coverImageURL.value.trim() === "") {
        return false
    }

    return true
}


async function fillInputFileds(bookId) {
    try {
        const response = await fetch(`https://book-store-api-liard-three.vercel.app/books/${bookId}`)
        const data = await response.json()
        // console.log(data);

        if (response.status === 404) {
            // window.alert("no such book with this id!")
            Toastify({
            text: "No such book with this id!",
            duration: 2000,
            //   destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, red, orange)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
            return
        }

        title.value = data.title
        price.value = data.price
        description.value = data.description
        stock.value = data.price
        coverImageURL.value = data.coverImageURL
        // if (response.status === 200) {
        //     title.value = data.title
        //     price.value = data.price
        //     description.value = data.description
        //     stock.value = data.price
        //     coverImageURL.value = data.coverImageURL
        // }
    } catch (error) {
        console.log(error);
    }
}

if (id) {
    fillInputFileds(id)
}