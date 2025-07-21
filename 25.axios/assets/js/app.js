// named import
import { PI, str as myStr } from "./constants.js"
// import square from "./constants.js";
// import findSquare from "./constants.js";
import {
    getAllData,
    getDataById,
    deleteDataById,
    editDataById,
    addNewData
} from "./services.js"

// const BASE_URL = "https://northwind.vercel.app/api"

// const getAllData = async()=>{
//     try {
//         const response = await fetch(`${BASE_URL}/categories`)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);  
//     }
// }

// getAllData()

// -----------------------------------

// let str = "hello"
// // console.log(square(4));
// console.log(findSquare(4));

// console.log("PI", PI);
// console.log("str", myStr);

// const instance = axios.create({
//   baseURL: 'https://northwind.vercel.app/api/',
//   timeout: 1000,
//   headers: {'Content-Type': 'application/json'}
// });


// const getAllData = async () => {
//     try {
//         const response = await instance.get("categories")
//         console.log(response.data);
//     }
//     catch(error){
//         console.log(error);

//     }
// }

// getAllData()

//--------------
// getAllData("categories").then((res) => {
//     console.log(res);
// }).catch((err) => {
//         console.log(err);
// })

// const getCategories = async () => {
//     try {
//         const categories = await getAllData("categories")
//         console.log(categories);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getCategories()


const categoryForm = document.querySelector("#category-form")
async function renderList() {
    const list = document.querySelector(".category-list")
    list.innerHTML = ""
    const categories = await getAllData("categories")

    categories.forEach((c) => {
        const liElem = document.createElement("li")
        liElem.textContent = c.name

        liElem.addEventListener("click", async (e) => {
            const confirm = window.confirm("Are u sure to delete this category!?")
            if(!confirm){
                return;
            }
            const deleteResponse = await deleteDataById("categories", c.id)

            if (deleteResponse.status === 200) {
                // renderList()
                e.target.remove()
            }
        })

        list.appendChild(liElem)
    })
}

renderList()

categoryForm.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const nameInput = document.getElementById("name")
    const descriptionInput = document.getElementById("description")

    const newCategory = {
        name: nameInput.value.trim(),
        description: descriptionInput.value.trim()
    }

    if(!nameInput.value || !descriptionInput.value){
        window.alert("fill all input fields!")
        return
    }

    const response = await addNewData("categories", newCategory)
    if(response.status >=200 && response.status < 300){
        renderList()
    }
})
