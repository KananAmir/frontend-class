
const fetchBooks = async () => {
    try {
        const response = await fetch("https://book-store-api-liard-three.vercel.app/books", {
            method: "GET",
        });
        const data = await response.json();
        // console.log(data);
        renderBooks(data)
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

fetchBooks()


// async function deleteBook(bookId){}
const  deleteBook = async (bookId) =>{
    try{
        const response = await fetch(`https://book-store-api-liard-three.vercel.app/books/${bookId}`, {
            method: "DELETE"
        })
        console.log(response); 
    }
    catch(error) {
        console.error("Error deleting book:", error);
    }
}


function renderBooks (books){
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = ''; // Clear existing content
    books.forEach((book)=>{
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
        btn.addEventListener("click", async (event)=>{
            const id = event.currentTarget.getAttribute("data-id");
            const confirmDelete = confirm("Are you sure you want to delete this book?");
            if (!confirmDelete) {
                return; // Exit if the user cancels the deletion
            }
           const deleteResponse =  await deleteBook(id);
            // await fetchBooks();
            // event.target.parentElement.parentElement.remove(); 
            event.target.closest('tr').remove(); 
            
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

