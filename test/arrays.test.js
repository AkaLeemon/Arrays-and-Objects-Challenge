const { numbers, doubleArray, sumArray, findMax, removeEvens, reverseArray, flattenArray, uniqueElements } = require("../arrays");

test("doubleArray function", () => {
    expect(doubleArray([1, 2, 3])).toEqual([2, 4, 6]);
});

test("sumArray function", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
});

test("findMax function", () => {
    expect(findMax([3, 7, 5, 1])).toBe(7);
});

test("removeEvens function", () => {
    expect(removeEvens([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
});

test("reverseArray function", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

test("flattenArray function", () => {
    expect(flattenArray([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
});

test("uniqueElements function", () => {
    expect(uniqueElements([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
});