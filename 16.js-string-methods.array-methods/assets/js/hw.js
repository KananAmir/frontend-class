// 5) “Tələbələrin ballarına görə qiymət təyin edən funksiya yazin”
// Məqsəd:
// Verilən bal (0–100 aralığında tam ədəd) əsasında tələbəyə müvafiq hərf qiymətini (A, B, C, D, F) təyin edən JavaScript funksiyasi yazmaq.

// | Bal aralığı | Qiymət |
// | ----------- | ------ |
// | 80 – 100    | **A**  |
// | 70 – 79     | **B**  |
// | 60 – 69     | **C**  |
// | 50 – 59     | **D**  |
// | 0 – 49      | **F**  |

function getGradeByScore(score){
    if (score >= 80 && score <=100) {
        return 'A';
    }else if(score>=70 && score < 80){
        return 'B';
    }else if (score>= 60 && score <70){
        return 'C';
    }else if(score >=50 && score < 60){
        return 'D';
    }else if (score >=0 && score < 50){
        return 'F';
    }else{
        return 'Invalid score';
    }


}


console.log(getGradeByScore(84)); // A
console.log(getGradeByScore(67)); // C
console.log(getGradeByScore(-14)); // C
console.log(getGradeByScore(230)); // C


