
// 1️⃣ Create an array called numbers that contains the numbers 1 to 5
const numbers = [1, 2, 3, 4, 5];

// 2️⃣ Create a function called doubleArray that doubles each number in an array
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

// 3️⃣ Create a function called sumArray that returns the sum of all numbers in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 4️⃣ Create a function called findMax that returns the largest number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// 5️⃣ Create a function called removeEvens that removes even numbers from an array
function removeEvens(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 6️⃣ Create a function called reverseArray that reverses the order of elements in an array
function reverseArray(arr) {
    return arr.reverse();
}

// 7️⃣ (Hard) Create a function called flattenArray that flattens a nested array
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// 8️⃣ (Hard) Create a function called uniqueElements that returns only unique values from an array
function uniqueElements(arr) {
    return [...new Set(arr)];
}

module.exports = { numbers, doubleArray, sumArray, findMax, removeEvens, reverseArray, flattenArray, uniqueElements };
