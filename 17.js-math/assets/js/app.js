// console.log(Math.abs(-15)); //15
// console.log(Math.ceil(13.748)); //14
// console.log(Math.floor(13.748)); //13
// console.log(Math.round(13.548)); //14
// console.log(Math.trunc(13.548)); //13
// console.log(Math.pow(4,3)); // 64
// console.log(Math.sqrt(64)); //8

// console.log(Math.max(3,5,88,44,52,76)); //88
// console.log(Math.min(3,5,88,44,52,76)); //88


// const nums = [332, 830, 344, 43, 82, 523];
// console.log(Math.max(...nums)); //830
// console.log(Math.min(...nums)); //43



let randomNumber = Math.floor(Math.random() * 10)

console.log(randomNumber);

// Math.random * (max - min) + min; // random number between min and max

// 30 - 40

console.log(Math.round(Math.random() * 10 + 30));



const body = document.querySelector('body');
const changeBgColorBtn = document.querySelector('.change-bg');

// body.style.backgroundColor = "yellow"


function generateColorCode(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;  
}



changeBgColorBtn.addEventListener("click", function(){
  const randomColor = generateColorCode();
    body.style.backgroundColor = randomColor;
})