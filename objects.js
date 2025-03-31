// 1️⃣ Create an object called person with properties name and age
const person = { name: "John", age: 30 };

// 2️⃣ Create a function called getProperty that returns the value of a property in an object
function getProperty(obj, prop) {
    return obj[prop];
}

// 3️⃣ Create a function called addProperty that adds a new property to an object
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

// 4️⃣ Create a function called removeProperty that removes a property from an object
function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}

// 5️⃣ Create a function called objectKeys that returns an array of object keys
function objectKeys(obj) {
    return Object.keys(obj);
}

// 6️⃣ Create a function called objectValues that returns an array of object values
function objectValues(obj) {
    return Object.values(obj);
}

// 7️⃣ (Hard) Create a function called mergeObjects that merges two objects into one
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// 8️⃣ (Hard) Create a function called deepClone that creates a deep copy of an object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = { person, getProperty, addProperty, removeProperty, objectKeys, objectValues, mergeObjects, deepClone };
