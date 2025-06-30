
// const arr = [1,2,3]
// arr[0] = 111

// console.log(arr);

//strings are immuatebale

let str = "Hello World"
console.log(typeof str);



console.log(str.length); //5
console.log(str.charAt(1));
console.log(str.charCodeAt(0));
console.log(str.at(0)); // h
console.log(str.at(-1)); //o
console.log(str.at(-2)); //l

console.log(str.slice());
console.log(str.slice(6));
console.log(str.slice(0, 5));
console.log(str.slice(-1));
console.log(str.slice(-5));


console.log(str.substring());
console.log(str.substring(6));
console.log(str.substring(0, 5));

console.log(str.toUpperCase());
console.log(str.toLowerCase());


console.log(str.toLocaleLowerCase("az"));
console.log(str.toLocaleUpperCase("az"));


let fName = "Kanan"
let lName = "Amirov"

// let fullName = fName + " " + lName
let fullName = fName.concat(" ", lName)

console.log(fullName);

console.log("     jhone_doe     ");
console.log("     jhone_doe     ".trimStart());
console.log("     jhone_doe     ".trimEnd());
console.log("     jhone_doe     ".trim());


// console.log("apple".split());
// console.log("1,2,3,4".split(","));
// console.log("Salam Aleykum".split(" "));


// console.log("apple".split(""));
let a = "apple"
console.log([...a]);
console.log(Array.from(a));


let cardNumber = "1234123412341234"

// console.log(cardNumber.padEnd(30, "#"));

console.log(cardNumber.slice(-4).padStart(16, "*"));


console.log("salam".indexOf("l")); // 2
console.log("salam".indexOf("s")); // 0
console.log("hello world".indexOf("l")); // 2
console.log("hello world".indexOf("l", 5)); // 9
console.log("hello world".lastIndexOf("l")); // 9
console.log("hello world".startsWith("he")); // true
console.log("hello world".startsWith("world")); // false
console.log("hello world".endsWith("world")); // true
console.log("hello world".endsWith("hello")); // false


console.log("lorem ipsum dolor".includes("ipsum")); //true
console.log("lorem ipsum dolor".includes("test")); //false



// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"

// const convertToUpper = (sentence) =>{
//     return sentence.toUpperCase();
// }

// console.log(convertToUpper("lorem ipsum dolor"));


// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// reverseWordOrder("javascript öyrənmək maraqlıdır");

// Nəticə: "maraqlıdır öyrənmək javascript"

const reverseWordOrder = (sentence) => {
    return sentence.split(" ").reverse().join(" ")
}

console.log(reverseWordOrder("javascript öyrənmək maraqlıdır"));


// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// replaceCharacter("Salam", "a", "o");

// Nəticə: "solom"


function replaceCharacter(sentence, oldChar, newChar) {
    return sentence.toLowerCase().replaceAll(oldChar, newChar)
}


console.log(replaceCharacter("Salam", "a", "o"));


// # Verilən cümlədəki hərflərin sayını hesab


function countBigLetters(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        // console.log(sentence.charCodeAt(i));
        
        if (sentence[i] === sentence[i].toUpperCase()) {
            if (sentence.charCodeAt(i) <= 90 && sentence.charCodeAt(i) >= 65
                ||
                sentence.charCodeAt(i)<= 122 && sentence.charCodeAt(i)>= 97) {
                    count++
            }
        }
    }

    return `Count: ${count}`;
}

console.log(countBigLetters("Salam NeCesen?"));



// verilən sözün polidrom olub olmamasını tapan funksiya yazın

// hello - olleh
// race - ecar
// level - level
// ana

function isPolidrom(word) {
    const reverseStr = word.split("").reverse().join("");
    return word === reverseStr ? `${word} is polidrom!` : `${word} is not polidrom!`
}

console.log(isPolidrom("hello"));
console.log(isPolidrom("race"));
console.log(isPolidrom("level"));
console.log(isPolidrom("ana"));
