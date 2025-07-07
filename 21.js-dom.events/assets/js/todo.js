const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-text")

const todos = []

todoForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    const newTodo = {
        text: todoInput.value.trim(),
        completed: false,
        id: Date.now()
    }

    todos.push(newTodo)

    renderTodoList(todos)
    resetForm()
    
})


function renderTodoList(arr){
    const list = document.querySelector(".todo-list")
    list.innerHTML = ""
    
    arr.forEach((todo)=>{
        const todoElement = document.createElement("li")
        todoElement.textContent = todo.text
        list.append(todoElement)
    })
}


function resetForm (){
    todoInput.value = ""
}