const btn = document.querySelector(".btn")
const box = document.querySelector(".box")
const searchInput = document.querySelector(".search")



// btn.addEventListener("click", (e)=>{
//     // console.log("clicked");
//     console.log(e.target);
// })


// btn.addEventListener("contextmenu", (e)=>{
//     console.log("contextmenu event");
//     // console.log(e);
// })



// box.addEventListener("mouseup", ()=>{
//     console.log("mouseup");  
// })
// box.addEventListener("mousedown", ()=>{
//     console.log("mousedown");  
// })
box.addEventListener("mouseout", ()=>{
    console.log("mouseout");  
})
box.addEventListener("mouseover", ()=>{
    console.log("mouseover");  
})
box.addEventListener("mouseenter", ()=>{
    console.log("mouseenter");  
})
box.addEventListener("mousemove", ()=>{
    console.log("mousemove");  
})


// searchInput.addEventListener("keydown", (e)=>{
//     // console.log(e);
//     console.log(e.code);
//     console.log(e.key);
// })
// searchInput.addEventListener("keyup", (e)=>{
//     // console.log(e);
//     console.log(e.code);
//     console.log(e.key);
    
// })



let alpha = 0

window.addEventListener("keyup", (e)=>{
    // console.log(e.key);
    
   if(e.key === "ArrowUp" && alpha<1){
    alpha+=0.1
   }else if(e.key === "ArrowDown" && alpha > 0){
    alpha-=0.1
   }
   console.log(alpha);

document.body.style.backgroundColor = `rgba(255, 255, 0, ${alpha})`
   
})


searchInput.addEventListener("focus", (e)=>{
    console.log("focused");
    console.log(e.target);
    
    e.target.style.backgroundColor = "cyan"
})
searchInput.addEventListener("blur", (e)=>{
    console.log("blured");
    e.target.style.backgroundColor = "transparent"
})

window.addEventListener("load", (e)=>{
    console.log("load event worked");
    
})
window.addEventListener("DOMContentLoaded", (e)=>{
    console.log("DOMContentLoaded event worked"); 
})