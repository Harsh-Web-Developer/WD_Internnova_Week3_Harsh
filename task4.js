// 1. Check if a number is positive, negative, or zero
let testNum = -7;

console.log("--- Number Check ---");

if (testNum > 0) {
    console.log(testNum, "is Positive");
} else if (testNum < 0) {
    console.log(testNum, "is Negative");
} else {
    console.log(testNum, "is Zero");
}


// 2. Check whether a number is even or odd
let checkVal = 18;

console.log("--- Even or Odd Check ---");

if (checkVal % 2 === 0) {
    console.log(checkVal, "is Even");
} else {
    console.log(checkVal, "is Odd");
}


// 3. Check voting eligibility using a nested if
let userAge = 19;
let hasVoterCard = true;

console.log("--- Age Eligibility ---");

if (userAge >= 18) {
    if (hasVoterCard) {
        console.log("Eligible to vote!");
    } else {
        console.log("You are old enough, but you need a voter card.");
    }
} else {
    console.log("You are not eligible to vote yet.");
}


// 4. Find the greatest among three numbers
let x = 25;
let y = 40;
let z = 30;

console.log("--- Greatest Number ---");

if (x >= y && x >= z) {
    console.log(x, "is the greatest");
} else if (y >= x && y >= z) {
    console.log(y, "is the greatest");
} else {
    console.log(z, "is the greatest");
}


// 5. Assign a grade based on marks
let studentMarks = 84;

console.log("--- Grade System ---");

if (studentMarks >= 90) {
    console.log("Grade: A+");
} else if (studentMarks >= 80) {
    console.log("Grade: A");
} else if (studentMarks >= 70) {
    console.log("Grade: B");
} else if (studentMarks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}
