// Arithmetic Operators (+, -, *, /, %)
let a = 10;
let b = 3;

let sum = a + b;         // Addition
let difference = a - b;  // Subtraction
let product = a * b;     // Multiplication
let quotient = a / b;    // Division
let remainder = a % b;   // Modulus

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

// Assignment Operators (=, +=, -=, *=, /=)
let x = 5;
x += 2;   // x = x + 2 → x = 7
x *= 3;   // x = x * 3 → x = 21

console.log("Value of x after += and *= : " + x);

// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
let y = 10;
let z = '10';

console.log("y == z: " + (y == z));   // true (only value compared)
console.log("y === z: " + (y === z)); // false (value & type compared)
console.log("y != z: " + (y != z));   // false
console.log("y !== z: " + (y !== z)); // true
console.log("y > 5: " + (y > 5));     // true
console.log("y <= 10: " + (y <= 10)); // true
