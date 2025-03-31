const { constants } = require("buffer");

// 1️⃣ Create an object called person with properties name and age

// 2️⃣ Create a function called getProperty that returns the value of a property(specify a propery) in an object

// 3️⃣ Create a function called addProperty that adds a new property to an object


// 4️⃣ Create a function called removeProperty that removes a property from an object


// 5️⃣ Create a function called objectKeys that returns an array of object keys

// 6️⃣ Create a function called objectValues that returns an array of object values


// 7️⃣ (Hard) Create a function called mergeObjects that merges two objects into one

// 8️⃣ (Hard) Create a function called deepClone that creates a deep copy of an object


module.exports = { person, getProperty, addProperty, removeProperty, objectKeys, objectValues, mergeObjects, deepClone };



// hints below


















// 5 .keys
//6 .values
// 7 "the spread opeartor" + the objects ...obj1, ...obj2
// 8 JSON.parse + JSON.stringify