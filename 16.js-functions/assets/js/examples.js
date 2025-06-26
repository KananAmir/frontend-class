
// Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)


function power(a, b) {
    // return Math.pow(a, b);
    return a**b
}

console.log(power(3,4)); //81
console.log(power(2,5)); //32



// Stringi böyük hərflərə çevirən funksiya yazın
//function upperStr(str){}


const upperStr = (str)=>{
    return str.toUpperCase()
}


console.log(upperStr("hello")); //HELLO
console.log(upperStr("salam")); //SALAM



//arrayin daxilinide olan max numberi tapmaq üçün funksiya yazın


function findMaxDigitInArray(array) {
    let max = array[0]
    for (let i = 1; i<array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }

    return max
}

console.log(findMaxDigitInArray([3,6,4,9,1])); //9
console.log(findMaxDigitInArray([45, 67, 92, 57 ,95, 91, 44, 65])); //95
