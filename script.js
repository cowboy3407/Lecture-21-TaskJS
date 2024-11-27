const numbers = [1,3,5,13,14,23,30];
console.log(numbers);

const squaredNumbers = numbers.map(square => square * square );
console.log(squaredNumbers);

const evenNumbers = numbers.filter (num => num % 2 === 0);
console.log(evenNumbers);

const total = numbers.reduce ((a,b) => a + b,0);
console.log(total);

let num = 12;
function checkNumbers (num) {
    if (num >= 10 && num %2 === 0) {
        console.log("True");
    } else  {
        console.log("False");
    }
    
}

checkNumbers(num);