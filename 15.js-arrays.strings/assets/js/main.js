//strings

let str = "hello"

let newStr = str + " world" //hello world
// strings are immutable

// console.log(str);
// console.log(newStr);




// console.log(str[0]);
// console.log(str.length);
// console.log(newStr.length);

// console.log(str[str.length - 1]);


let country = "azerbaijan"

let sampleText = "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"


for (let i = 0; i < country.length; i++) {
    console.log(country[i]);
}

let countA = 0
let wordCount = 0
for (let i = 0; i < sampleText.length; i++) {
    if (sampleText[i] === " ") {
        wordCount++
    }
}

console.log("wordCount: ", wordCount + 1);


//arrays


const numbers = [12, 14, 2, 86, 73, 46]

console.log(numbers[0]);
console.log(numbers[3]);
console.log("length", numbers.length);
console.log(numbers[numbers.length-1]);

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies


// arrays are mutable

console.log(webTechs);

webTechs[1] = "SCSS"

console.log(webTechs);

const scores = [90, 80, 100, 95, 85]

// let sum = 0
// for(let i = 0; i < scores.length; i++){
//     // sum = sum + scores[i]
//     // console.log(`${sum} + ${scores[i]} = ${sum + scores[i]}`);
//     sum+=scores[i]
    
// }


let sum = scores[0];
for(let i = 1; i < scores.length; i++){
    // sum = sum + scores[i]
    // console.log(`${sum} + ${scores[i]} = ${sum + scores[i]}`);
    sum+=scores[i]
    
}

console.log("SUM:", sum);
console.log("Average:", sum/scores.length);
