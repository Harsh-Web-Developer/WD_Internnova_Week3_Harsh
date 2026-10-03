// 1. Print numbers from 1 to 10
console.log("--- Numbers from 1 to 10 ---");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print even numbers from 1 to 10
console.log("--- Even Numbers ---");

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


// 3. Print odd numbers from 1 to 10 using a while loop
console.log("--- Odd Numbers ---");

let oddVal = 1;

while (oddVal <= 10) {
    console.log(oddVal);
    oddVal += 2;
}


// 4. Print the multiplication table of 5
console.log("--- Multiplication Table of 5 ---");

let tableNum = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}


// 5. Find the sum of the first 10 natural numbers
console.log("--- Sum of 1 to 10 ---");

let totalSum = 0;
let numCounter = 1;

while (numCounter <= 10) {
    totalSum += numCounter;
    numCounter++;
}

console.log("Total Sum:", totalSum);


// 6. Print numbers in reverse order using do-while
console.log("--- Countdown from 5 to 1 ---");

let reverseNum = 5;

do {
    console.log(reverseNum);
    reverseNum--;
} while (reverseNum >= 1);
