const search = document.querySelector("#search")
const sort = document.querySelector("#sort")
const loading = document.querySelector(".loading")
const tableWrapper = document.querySelector(".table-wrapper")

let allBooks = null;

const fetchBooks = async () => {
    try {
        loading.classList.replace("d-none", "d-flex");
        const response = await fetch("https://book-store-api-liard-three.vercel.app/books", {
            method: "GET",
        });
        const data = await response.json();
        tableWrapper.classList.replace("d-none", "d-block")
        // console.log(data);
        renderBooks(data)
        allBooks = data;
    } catch (error) {
        console.error("Error fetching books:", error);
    } finally {
        loading.classList.replace("d-flex", "d-none");
    }
}

fetchBooks()


// async function deleteBook(bookId){}
const deleteBook = async (bookId) => {
    try {
        const response = await fetch(`https://book-store-api-liard-three.vercel.app/books/${bookId}`, {
            method: "DELETE"
        })
        console.log(response);
    }
    catch (error) {
        console.error("Error deleting book:", error);
    }
}


function renderBooks(books) {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = ''; // Clear existing content
    books.forEach((book) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td>${book.description?.slice(0, 50)}...</td>
            <td>${book.stock}</td>
            <td><img src="${book.coverImageURL}" width="100"/></td>
            <td>
                <button class="btn btn-outline-danger delete" data-id="${book.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `
        tBody.appendChild(row);
    })

    const allDeleteButtons = document.querySelectorAll('.delete');
    allDeleteButtons.forEach((btn) => {
        btn.addEventListener("click", async (event) => {
            const id = event.currentTarget.getAttribute("data-id");
            // const confirmDelete = confirm("Are you sure you want to delete this book?");
            // if (!confirmDelete) {
            //     return; // Exit if the user cancels the deletion
            // }

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const deleteResponse = await deleteBook(id);
                    event.target.closest('tr').remove();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });


            // await fetchBooks();
            // event.target.parentElement.parentElement.remove(); 


            // if(deleteResponse.ok) {
            //     event.target.closest('tr').remove(); 
            //     console.log(`Book with ID ${id} deleted successfully.`);
            // } else {
            //     console.error(`Failed to delete book with ID ${id}.`);
            // }

            // if(deleteResponse.status === 200) {
            //     event.target.closest('tr').remove(); 
            //     console.log(`Book with ID ${id} deleted successfully.`);
            // } else {
            //     console.error(`Failed to delete book with ID ${id}.`);
            // }


        })
    })
}

let timeout = null
search.addEventListener("keyup", (e) => {
    loading.classList.replace("d-none", "d-flex");
    tableWrapper.classList.replace("d-block", "d-none");

    clearTimeout(timeout)
    // console.log(e.target.value);
    // console.log("allBooks", allBooks); 
    const searchValue = e.target.value.trim().toLowerCase()
    const filteredBooks = allBooks.filter((book) => book.title.toLowerCase().includes(searchValue))
    // renderBooks(filteredBooks)


    timeout = setTimeout(() => {
        fetch(`https://book-store-api-liard-three.vercel.app/books?title_like=${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                renderBooks(data)
                loading.classList.replace("d-flex", "d-none");
                tableWrapper.classList.replace("d-none", "d-block");
            }).catch((err) => {
                console.log(err);
            })
    }, 500);



})

sort.addEventListener("change", (e) => {
    loading.classList.replace("d-none", "d-flex");
    tableWrapper.classList.replace("d-block", "d-none");

    const sortValue = e.target.value
    let url = ""
    switch (sortValue) {
        case "ascByPrice":
            url = `https://book-store-api-liard-three.vercel.app/books?_sort=price&_order=asc`
            break;
        case "descByPrice":
            url = `https://book-store-api-liard-three.vercel.app/books?_sort=price&_order=desc`
            break;
        case "ascByTitle":
            url = `https://book-store-api-liard-three.vercel.app/books?_sort=title&_order=asc`
            break;
        case "descByTitle":
            url = `https://book-store-api-liard-three.vercel.app/books?_sort=title&_order=desc`
            break;

        default:
            url = `https://book-store-api-liard-three.vercel.app/books`
            break;
    }

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderBooks(data)
            loading.classList.replace("d-flex", "d-none");
            tableWrapper.classList.replace("d-none", "d-block");
        }).catch((err) => {
            console.log(err);
        })


})