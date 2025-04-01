
// 1️⃣ Create an array called numbers that contains the numbers 1 to 5
function numbers = [1, 2, 3, 4, 5]
 
console.log(numbers)
// 2️⃣ Create a function called doubleArray that doubles each number in an array
function doubleArray = {
    return (numbers * 2)
}

// 3️⃣ Create a function called sumArray that returns the sum of all numbers in an array
function sumArray = {
    return (Math.round(numbers))
}

console.log(sumArray)
// 4️⃣ Create a function called findMax that returns the largest number in an array
function findMax = {
    return (Math.max(numbers))
}

console.log(findMax)
// 5️⃣ Create a function called removeEvens that removes even numbers from an array
function removeEvens = {

}

// 6️⃣ Create a function called reverseArray that reverses the order of elements in an array
function reverseArray = {

}

// 7️⃣ (Hard) Create a function called flattenArray that flattens a nested array
function flattenArray = {

}
// 8️⃣ (Hard) Create a function called uniqueElements that returns only unique values from an array
function uniqueElements = {

}

module.exports = { numbers, doubleArray, sumArray, findMax, removeEvens, reverseArray, flattenArray, uniqueElements };