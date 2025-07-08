const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-text")
const errorMesage = document.querySelector(".error-message")
const todoFilter = document.querySelector(".todo-filter")

const todos = []

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()


    if (todoInput.value === "") {
        errorMesage.classList.remove("d-none")
        return
    }

    const newTodo = {
        text: todoInput.value.trim(),
        completed: false,
        id: Date.now()
    }

    todos.push(newTodo)

    renderTodoList(todos)
    resetForm()
    errorMesage.classList.add("d-none")

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Todo added successfully!",
        showConfirmButton: false,
        timer: 1500
    });

    
})


function renderTodoList(arr) {
    const list = document.querySelector(".todo-list")
    list.innerHTML = ""

    arr.forEach((todo) => {
        const todoElement = document.createElement("li")
        todoElement.className = "list-group-item list-group-item-primary mb-3 d-flex justify-content-between align-items-center"

        const todoText = document.createElement("span")
        todoText.textContent = todo.text
  
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = todo.completed

        if(checkbox.checked === true){
            todoText.style.textDecoration = "line-through"
        }

        checkbox.addEventListener("change", (e)=>{
            console.log(e.target.checked);

            const updatedTodo = todos.find((q)=>q.id == todo.id)

            updatedTodo.completed = !updatedTodo.completed

            console.log(todo);
            
            renderTodoList(todos)
            
        })

        const todoWrapper = document.createElement("div")
        todoWrapper.className = "d-flex gap-2 align-items-center"

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        deleteBtn.classList.add("btn", "btn-danger")
        deleteBtn.addEventListener("click", (e) => {


            Swal.fire({
                title: "Are you sure to delete todo?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    // console.log(e.target.parentElement);
                    // e.target.parentElement.remove()
                    // console.log(todo);
                    const idx = todos.findIndex((q) => q.id == todo.id)

                    todos.splice(idx, 1)

                    renderTodoList(todos)


                    Swal.fire({
                        title: "Deleted succesfully!",
                        // text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        })


        todoWrapper.append(checkbox, todoText)
        todoElement.append(todoWrapper, deleteBtn)
        list.append(todoElement)
    })
}


function resetForm() {
    todoInput.value = ""
}


todoFilter.addEventListener("change", (e)=>{
    let filtered = null
    switch (e.target.value) {
        case "completed":
            filtered = todos.filter((todo) => todo.completed)
            break;
    
        case "pending":
            filtered = todos.filter((todo) => !todo.completed)
            break;
    
        default:
            filtered = [...todos]
            break;
    }


    renderTodoList(filtered)
    
    
})