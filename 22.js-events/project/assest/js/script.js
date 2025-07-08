//scroll event
const header = document.querySelector(".header")

// window.addEventListener("scroll", (e)=>{
//     console.log(window.scrollY);
//     if(window.scrollY > 0){
//         header.classList.add("scroll")
//     }else{
//         header.classList.remove("scroll")
//     }
// })

window.addEventListener("scroll", (e)=>{
    header.classList.toggle("scroll", window.scrollY > 0)
})