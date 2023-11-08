import {
  removeDuplicateObjects,
  checkIsObject,
  checkHasPrimitiveValue,
} from "./helpers";

const arrWithDuplicates = [
  { id: 0, string: "test1", number: 11 },
  { id: 1, string: "test1", number: 12 },
  { id: 2, string: "test2", number: 13 },
  { id: 3, string: "test2", number: 14 },
  { id: 4, string: "test3", number: 14 },
  { id: 5, string: "test3", number: 12 },
];

describe("removeDuplicateObjects", () => {
  test("fn removes duplicates by property with string value", () => {
    const result = removeDuplicateObjects(arrWithDuplicates, "string");
    const expected = [
      { id: 0, string: "test1", number: 11 },
      { id: 2, string: "test2", number: 13 },
      { id: 4, string: "test3", number: 14 },
    ];

    expect(result).toMatchObject(expected);
    expect(result.length).toBe(expected.length);
  });

  test("fn removes duplicates by property with number value", () => {
    const result = removeDuplicateObjects(arrWithDuplicates, "number");
    const expected = [
      { id: 0, string: "test1", number: 11 },
      { id: 1, string: "test1", number: 12 },
      { id: 2, string: "test2", number: 13 },
      { id: 3, string: "test2", number: 14 },
    ];

    expect(result).toMatchObject(expected);
    expect(result.length).toBe(expected.length);
  });

  test("fn throws Error with passed in array of primitive elements", () => {
    const arr1 = [0, 1, 2, 3, 4, 5];
    const arr2 = ["foo", "bar", "baz"];

    expect(() => removeDuplicateObjects(arr1, "prop")).toThrow(Error);
    expect(() => removeDuplicateObjects(arr2, "prop")).toThrow(Error);
  });

  test("fn throws Error with passed in array of objects with non number | string | boolean | undefined values", () => {
    const arr1 = [{ prop: 1 }, { prop: "two" }, { prop: null }];
    const arr2 = [{ prop: 1 }, { prop: "two" }, { prop: [1, 2, 3] }];
    const arr3 = [{ prop: 1 }, { prop: "two" }, { prop: { foo: "bar" } }];

    expect(() => removeDuplicateObjects(arr1, "prop")).toThrow(Error);
    expect(() => removeDuplicateObjects(arr2, "prop")).toThrow(Error);
    expect(() => removeDuplicateObjects(arr3, "prop")).toThrow(Error);
    expect(() => removeDuplicateObjects(arr4, "prop")).toThrow(Error);
    expect(() => removeDuplicateObjects(arr5, "prop")).toThrow(Error);
  });

  test("fn not filter out elements with undefined prop", () => {
    const arr1 = [{ prop: 1 }, { prop: "1" }, { foo: "bar" }];
    const arr2 = [{ prop: 1 }, { prop: 1 }, { prop: undefined }];

    expect(removeDuplicateObjects(arr1, "prop")).toMatchObject(arr1);
    expect(removeDuplicateObjects(arr2, "prop")).toMatchObject([
      { prop: 1 },
      { prop: undefined },
    ]);
  });
});

describe("checkIsObject", () => {
  test("fn returns true with passed in object Record<string, any>", () => {
    expect(checkIsObject({ foo: "bar" })).toBe(true);
  });

  test("fn returns false with passed in array | null | undefined | string | number | boolean ", () => {
    expect(checkIsObject([1, 2, 3])).toBe(false);
    expect(checkIsObject(null)).toBe(false);
    expect(checkIsObject()).toBe(false);
    expect(checkIsObject("foo")).toBe(false);
    expect(checkIsObject(111)).toBe(false);
    expect(checkIsObject(true)).toBe(false);
  });
});

describe("checkHasPrimitiveValue", () => {
  test("fn returns true if passed in object has number | string | boolean | undefined value", () => {
    expect(checkHasPrimitiveValue({ prop: 1 })).toBe(true);
    expect(checkHasPrimitiveValue({ prop: "foo" })).toBe(true);
    expect(checkHasPrimitiveValue({ prop: false })).toBe(true);
    expect(checkHasPrimitiveValue({ prop: undefined })).toBe(true);
  });

  test("fn returns false if passed in object has object | null | array value", () => {
    expect(checkHasPrimitiveValue({ prop: { foo: "bar" } })).toBe(false);
    expect(checkHasPrimitiveValue({ prop: null })).toBe(false);
    expect(checkHasPrimitiveValue({ prop: [1, 2, 3] })).toBe(false);
  });
});
