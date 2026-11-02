// Task 1: Process an array using a callback
function processArray(arr, callback) {
    let result = [];

    for (let element of arr) {
        let value = callback(element);

        // Support both mapping and filtering
        if (value !== undefined) {
            result.push(value);
        }
    }

    return result;
}

// Task 2: Square every number
let numbers = [1, 2, 3, 4];

let squares = processArray(numbers, function(n) {
    return n * n;
});

console.log("Squares:", squares);


// Task 3: Return only even numbers
let evenNumbers = processArray(numbers, function(n) {
    if (n % 2 === 0) {
        return n;
    }
});

console.log("Even Numbers:", evenNumbers);


// Task 4: Process a string using a callback
function processString(str, callback) {
    return callback(str);
}

// Task 5: Convert string to uppercase
let uppercase = processString("hello world", function(str) {
    return str.toUpperCase();
});

console.log("Uppercase:", uppercase);


// Task 6: Count words in a sentence
let wordCount = processString(
    "JavaScript is easy to learn",
    function(str) {
        return str.trim().split(/\s+/).filter(Boolean).length;
    }
);

console.log("Word Count:", wordCount);


// Task 7: Calculate using a callback
function calculate(a, b, callback) {
    return callback(a, b);
}

// Task 8: Arithmetic operations
let addition = calculate(10, 5, function(a, b) {
    return a + b;
});

let subtraction = calculate(10, 5, function(a, b) {
    return a - b;
});

let multiplication = calculate(10, 5, function(a, b) {
    return a * b;
});

let division = calculate(10, 5, function(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
});

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);


// Task 9: Find the first matching element
function findElement(arr, callback) {
    for (let element of arr) {
        if (callback(element)) {
            return element;
        }
    }

    return undefined;
}

let firstEven = findElement(numbers, function(n) {
    return n % 2 === 0;
});

console.log("First Even Number:", firstEven);
