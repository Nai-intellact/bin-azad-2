// assignment - 2:
function matchFinder(str1, str2) {
    // Check if both inputs are strings
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Please, enter valid input";
    }
    // Check if str2 is found in any part of str1
    if (str1.includes(str2)) {
        return true;
    } else {
        return false;
    }
}
let result1 = matchFinder("Hello, World!", "World"); // This should return true
let result2 = matchFinder("Hello, World!", "OpenAI"); // This should return false
let result3 = matchFinder(123, "OpenAI"); // This should return "Please, enter valid input"

console.log(result1); // Output: true
console.log(result2);
console.log(result3); // Output: false
// assignment -1:
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "please,enter number";
    }
    const cubicMentor = number * number * number;
    return cubicMentor;


}
const cubeResult = cubeNumber(5);
console.log(cubeResult);
const cubeResult1 = cubeNumber("dbsh");
console.log(cubeResult1);
// assignment 3:
function sortMaker(arr) {
    // Check if the array has exactly two elements
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid input";
    }

    // Extract the two elements from the array
    const [num1, num2] = arr;

    // Check if both elements are positive numbers
    if (num1 >= 0 && num2 >= 0) {
        // Check if both elements are equal
        if (num1 === num2) {
            return "equal";
        }

        // Sort the elements in descending order
        return [num1, num2].sort((a, b) => b - a);
    } else {
        return "Invalid input";
    }
}

// Example usage:
let result11 = sortMaker([5, 3]);   // This should return [5, 3]
let result22 = sortMaker([10, 10]); // This should return "equal"
let result33 = sortMaker([-1, 3]);   // This should return "Invalid input"
let result44 = sortMaker("not an array"); // This should return "Invalid input"

console.log(result11); // Output: [5, 3]
console.log(result22); // Output: "equal"
console.log(result33); // Output: "Invalid input"
console.log(result44); // Output: "Invalid input"
//  assignment 4:
function findAddress(obj) {
    // Check if the input is an object
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid input. Please provide an object.";
    }

    // Extract values of properties, replace missing properties with double underscore
    const values = Object.values(obj).map(value => (value !== undefined ? value : '__'));

    // Join the values with commas and return
    return values.join(', ');
}

// Example usage:
const addressObject = {
    street: "123 Main St",
    city: "Cityville",
    zip: "12345"
};

const result = findAddress(addressObject);
console.log(result);
// Output: "123 Main St, Cityville, 12345"

const incompleteObject = {
    street: "456 Oak St",
    zip: "54321"
};

const incompleteResult = findAddress(incompleteObject);
console.log(incompleteResult);
// Output: "456 Oak St, __, 54321"

