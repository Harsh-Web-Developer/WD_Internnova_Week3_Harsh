// Program 1: Calculate discount on a bill
console.log("--- Discount Calculator ---");

let billAmount = 1200;
let discount = 0;

// Decide the discount based on the bill amount
if (billAmount >= 1000) {
    discount = 15;
} else if (billAmount >= 500) {
    discount = 10;
}

let finalBill = billAmount - (billAmount * discount / 100);

console.log(`Original Bill: $${billAmount}`);
console.log(`Discount: ${discount}%`);
console.log(`Final Amount: $${finalBill}`);


// Program 2: Check whether a number is prime
console.log("--- Prime Number Checker ---");

let checkNumber = 17;
let isPrime = true;

if (checkNumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(checkNumber); i++) {
        if (checkNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`${checkNumber} is Prime:`, isPrime);


// Program 3: Find the factorial of a number
console.log("--- Factorial Calculator ---");

let factInput = 5;
let factorial = 1;
let k = factInput;

while (k > 1) {
    factorial *= k;
    k--;
}

console.log(`Factorial of ${factInput} is ${factorial}`);


// Program 4: Calculate simple interest
console.log("--- Simple Interest Calculator ---");

let principal = 5000;
let rate = 7.5;
let timeYears = 3;

let simpleInterest = (principal * rate * timeYears) / 100;

console.log(`Principal Amount: $${principal}`);
console.log(`Interest Rate: ${rate}%`);
console.log(`Time: ${timeYears} years`);
console.log(`Simple Interest: $${simpleInterest}`);


// Program 5: Check whether a year is a leap year
console.log("--- Leap Year Checker ---");

let targetYear = 2024;
let isLeapYear = false;

if (
    (targetYear % 4 === 0 && targetYear % 100 !== 0) ||
    targetYear % 400 === 0
) {
    isLeapYear = true;
}

console.log(`${targetYear} is a Leap Year:`, isLeapYear);
