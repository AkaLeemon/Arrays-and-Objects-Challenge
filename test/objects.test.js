const { person, getProperty, addProperty, removeProperty, objectKeys, objectValues, mergeObjects, deepClone } = require("../objects");

test("getProperty function", () => {
    expect(getProperty(person, "name")).toBe("John");
});

test("addProperty function", () => {
    let obj = { age: 30 };
    expect(addProperty(obj, "name", "Alice")).toEqual({ age: 30, name: "Alice" });
});

test("removeProperty function", () => {
    let obj = { name: "John", age: 30 };
    expect(removeProperty(obj, "age")).toEqual({ name: "John" });
});

test("objectKeys function", () => {
    expect(objectKeys({ name: "Alice", age: 25 })).toEqual(["name", "age"]);
});

test("objectValues function", () => {
    expect(objectValues({ name: "Alice", age: 25 })).toEqual(["Alice", 25]);
});

test("mergeObjects function", () => {
    expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test("deepClone function", () => {
    let original = { name: "John", details: { age: 30 } };
    let clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original); // Ensure it's a deep copy
});