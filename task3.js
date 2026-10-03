// Some numbers to work with
let a = 15;
let b = 4;

// 1. Arithmetic operators
console.log("--- Arithmetic Operators ---");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// 2. Assignment operators
console.log("--- Assignment Operators ---");

let num = 10;

num += 5;
console.log("After adding 5:", num);

num *= 2;
console.log("After multiplying by 2:", num);

// 3. Comparison operators
console.log("--- Comparison Operators ---");

console.log("Is a greater than b?", a > b);
console.log("Is a smaller than b?", a < b);
console.log("Is a equal to '15'?", a == "15");
console.log("Is a strictly equal to '15'?", a === "15");
console.log("Is a not equal to b?", a != b);

// 4. Logical operators
console.log("--- Logical Operators ---");

let hasTicket = true;
let hasID = false;

console.log("Has ticket AND ID:", hasTicket && hasID);
console.log("Has ticket OR ID:", hasTicket || hasID);
console.log("Does not have a ticket:", !hasTicket);

// 5. Increment and decrement operators
console.log("--- Increment & Decrement ---");

let count = 5;

count++;
console.log("Count after increasing by 1:", count);

count--;
console.log("Count after decreasing by 1:", count);
